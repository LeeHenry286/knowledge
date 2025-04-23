document.addEventListener('DOMContentLoaded', function() {
  const starsContainer = document.querySelector('.stars');
  const starCount = 150; // 星星数量
  const shootingStarCount = 10; // 流星数量

  // 生成随机星星
  for (let i = 0; i < starCount; i++) {
    const star = document.createElement('div');
    star.classList.add('star');
    
    // 随机位置
    const posX = Math.random() * 100; // 百分比位置
    const posY = Math.random() * 100; // 百分比位置
    
    // 随机大小
    const size = Math.random() * 3 + 1; // 1-4px
    
    // 随机闪烁动画延迟
    const delay = Math.random() * 4; // 0-4s

    // 设置样式
    star.style.left = `${posX}%`;
    star.style.top = `${posY}%`;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    star.style.animationDelay = `${delay}s`;
    
    // 添加到容器
    starsContainer.appendChild(star);
  }
  
  // 创建流星函数
  function createShootingStar() {
    // 创建流星元素
    const shootingStar = document.createElement('div');
    shootingStar.classList.add('shooting-star');
    
    // 随机起始位置（主要在屏幕左上区域）
    const startX = Math.random() * 20; // 0-20% of screen width
    const startY = Math.random() * 20; // 0-20% of screen height
    
    // 随机结束位置（主要在屏幕右下区域）
    const endX = 70 + Math.random() * 30; // 70-100% of screen width
    const endY = 70 + Math.random() * 30; // 70-100% of screen height
    
    // 计算移动距离和角度
    const distanceX = endX - startX;
    const distanceY = endY - startY;
    const rotation = Math.atan2(distanceY, distanceX) * (180 / Math.PI); // 角度
    
    // 随机大小和动画持续时间
    const width = Math.random() * 100 + 50; // 50-150px
    const duration = Math.random() * 3 + 1; // 1-4s
    
    // 设置样式
    shootingStar.style.left = `${startX}%`;
    shootingStar.style.top = `${startY}%`;
    shootingStar.style.width = `${width}px`;
    shootingStar.style.setProperty('--end-x', `${distanceX}%`);
    shootingStar.style.setProperty('--end-y', `${distanceY}%`);
    shootingStar.style.setProperty('--rotation', `${rotation}deg`);
    shootingStar.style.animationDuration = `${duration}s`;
    
    // 添加到容器
    document.body.appendChild(shootingStar);
    
    // 动画结束后移除元素
    shootingStar.addEventListener('animationend', function() {
      shootingStar.remove();
      // 随机延迟后再次创建新流星
      setTimeout(createShootingStar, Math.random() * 5000); // 0-5s延迟
    });
  }
  
  // 初始化流星
  for (let i = 0; i < shootingStarCount; i++) {
    // 随机延迟启动每个流星
    setTimeout(createShootingStar, Math.random() * 3000); // 0-3s延迟
  }
  
  // 显示文件名称
  const fileInput = document.getElementById('fileInput');
  if (fileInput) {
    fileInput.addEventListener('change', function() {
      const fileName = this.files[0]?.name || '未选择文件';
      const fileLabel = document.querySelector('.file-name-display');
      if (fileLabel) {
        fileLabel.textContent = fileName;
      }
    });
  }
}); 