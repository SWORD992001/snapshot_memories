document.addEventListener("DOMContentLoaded", () => {
    const feed = document.getElementById("image-feed");
    const images = JSON.parse(localStorage.getItem("uploadedImages")) || [];
  
    images.forEach((imgObj) => {
      const imgContainer = document.createElement("div");
      imgContainer.classList.add("feed-item");
  
      const imgElem = document.createElement("img");
      imgElem.src = imgObj.url;
      imgElem.alt = imgObj.caption;
  
      const captionElem = document.createElement("p");
      captionElem.textContent = imgObj.caption;
      imgContainer.appendChild(imgElem);
      imgContainer.appendChild(captionElem);
  
      feed.appendChild(imgContainer);
    });
  });
  