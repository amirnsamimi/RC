## CONFIG

این دستور چک می‌کنه که نام شاخه‌ی (branch) پیش‌فرض موقع اجرای git init چی تنظیم شده. خروجی می‌تونه مثلاً master یا main یا چیز دیگه‌ای باشه.

```bash
## TO SET
git config --get --global init.defaultBranch main
```

```bash
git config --get --global init.defaultBranch

master # or any name to show up here

## PLEASE DO THIS
git config --global --unset init.defaultBranch
```

- be sure rerere.enabled is not true
- 🔁 rerere = reuse recorded resolution
  این قابلیت باعث می‌شه Git وقتی در merge یا rebase با conflict مواجه می‌شی و یک‌بار اون conflict رو دستی حل می‌کنی، دفعه بعد اگر conflict مشابهی رخ داد، Git به طور خودکار همون راه‌حل رو استفاده کنه.
  در بعضی تیم‌ها یا پروژه‌ها، استفاده از rerere ممکنه باعث دردسر بشه چون: راه‌حل‌های قدیمی conflict ممکنه نادرست باشن. بعضی‌ها نمی‌خوان Git خودش conflictها رو دوباره حل کنه.

```bash
git config --global rerere.enabled
true
git config --global --unset rerere.enabled
git config --global rerere.enabled
```

1. 🔹 Global config
   روی کل سیستم کاربر اثر داره

مسیر: ~/.gitconfig

وقتی با --global تنظیم می‌کنی، اینجاست

```bash
git config --global user.name "Ali"
```

2. 🔸 Local (project-level) config
   فقط برای مخزن (repository) فعلی است

مسیر: .git/config داخل پوشه‌ی پروژه

وقتی بدون --global یا --system تنظیم می‌کنی، اینجاست

```bash
git config user.name "Project-Specific Name"
```
