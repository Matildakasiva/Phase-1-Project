
document.querySelector('#viewTrainInfoBtn').addEventListener('click', () => {
    const detailsSection = document.querySelector('#trainTrackerDetails');
  
    if (detailsSection) {
        const sectionOffsetTop = detailsSection.offsetTop;
        window.scrollTo({
            top: sectionOffsetTop,
            behavior: 'smooth'
        });
    }
  });
  