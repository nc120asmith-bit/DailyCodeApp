self.addEventListener("install", () => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("Service Worker activated");
});

// 🔔 通知スケジュール（毎朝7:00 & 夜21:30）
const MORNING_HOUR = 6;
const EVENING_HOUR = 18;
const EVENING_MIN = 30;

// 定期的に通知を発火
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();

  // 朝の通知
  if (hour === MORNING_HOUR && min === 0) {
    self.registration.showNotification("Daily Code（朝）", {
      body: "今日の変化と探究テーマをセットしましょう。",
      icon: "icon-192.png"
    });
  }

  // 夜の通知
  if (hour === EVENING_HOUR && min === EVENING_MIN) {
    self.registration.showNotification("Daily Code（夜）", {
      body: "今日の変化を3つ思い出して記録しましょう。",
      icon: "icon-192.png"
    });
  }
}, 60000);<script>
document.getElementById("requestNotification")
  .addEventListener("click", async () => {
    const permission = await Notification.requestPermission();
    if (permission === "granted") {
      alert("通知が有効になりました！");
    } else {
      alert("通知が許可されませんでした。");
    }
});
</script>

