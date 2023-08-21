document.addEventListener("DOMContentLoaded", () => {
    const uploadForm = document.getElementById("upload-form");
  
    uploadForm.addEventListener("submit", function (e) {
      e.preventDefault();
  
      const imageInput = document.getElementById("image-input");
      const captionInput = document.getElementById("caption-input");
  
      if (imageInput.files.length === 0) {
        alert("Please select an image.");
        return;
      }
  
      const uploadedImage = imageInput.files[0];
      const caption = captionInput.value;
  
      const reader = new FileReader();
      reader.onload = function () {
        const imageUrl = reader.result;
  
        const imageObj = { url: imageUrl, caption: caption };
        saveImage(imageObj);
        alert("Image uploaded successfully!");
        uploadForm.reset();
      };
  
      reader.readAsDataURL(uploadedImage);
    });
  
    function saveImage(imageObj) {
      const images = JSON.parse(localStorage.getItem("uploadedImages")) || [];
      images.push(imageObj);
      localStorage.setItem("uploadedImages", JSON.stringify(images));
    }
  });
  