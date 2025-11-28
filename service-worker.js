self.addEventListener("install", () => {
  console.log("Service Worker installed");
  self.skipWaiting();
});

self.addEventListener("activate", () => {
  console.log("Service Worker activated");
});

// 🔔 通知スケジュール（朝6:00 / 夜18:30）
const MORNING_HOUR = 6;
const MORNING_MIN = 0;

const EVENING_HOUR = 18;
const EVENING_MIN = 30;

// 1分ごとに通知をチェック
setInterval(() => {
  const now = new Date();
  const hour = now.getHours();
  const min = now.getMinutes();

  // 朝の通知
  if (hour === MORNING_HOUR && min === MORNING_MIN) {
    self.registration.showNotification("Daily Code（朝）", {
      body: "今日の変化と探求テーマをセットしましょう。",
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

}, 60000);


