// تابع اصلی برای تغییر مراحل (هم برای دکمه‌ها و هم برای کلیک روی استپ‌های بالا)
function goToStep(step) {
    // ۱. مخفی کردن تمام فرم‌ها
    const allSteps = document.querySelectorAll('.form-step');
    allSteps.forEach(el => {
        el.classList.remove('active');
    });

    // ۲. برداشتن حالت active از تمام نشانگرهای بالای صفحه
    const allIndicators = document.querySelectorAll('.step-item');
    allIndicators.forEach(el => {
        el.classList.remove('active');
    });
    
    // ۳. نمایش فرم مربوط به مرحله انتخاب شده
    const targetStep = document.getElementById('step-' + step);
    if (targetStep) {
        targetStep.classList.add('active');
    }
    
    // ۴. روشن کردن نشانگرهای مراحل تا مرحله فعلی
    for (let i = 1; i <= step; i++) {
        const indicator = document.getElementById('indicator-' + i);
        if (indicator) {
            indicator.classList.add('active');
        }
    }
}