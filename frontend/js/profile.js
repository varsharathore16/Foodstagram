var modal=document.getElementById("modal");var signUp=document.getElementById("sign-up");var signForm=document.getElementById("sign-up-form")
var logIn=document.getElementById("log-in")
var logForm=document.getElementById("log-in-form")
var sMsg=document.getElementsByClassName("message")[0];var lMsg=document.getElementsByClassName("message")[1];var span=document.getElementsByClassName("close");var pmodal=document.getElementById("pmodal");if(signUp){signUp.onclick=function(){modal.style.display="block";signForm.style.display="block";logForm.style.display="none";}}
if(logIn){logIn.onclick=function(){modal.style.display="block";signForm.style.display="none";logForm.style.display="block";}}
span[0].onclick=function(){modal.style.display="none";pmodal.style.display="none";if(sMsg){sMsg.remove();lMsg.remove();}}
span[1].onclick=function(){modal.style.display="none";pmodal.style.display="none";if(sMsg){sMsg.remove();lMsg.remove();}}
window.onclick=function(event){if(event.target==modal){modal.style.display="none";if(sMsg){sMsg.remove();lMsg.remove();}}
if(event.target==pmodal){pmodal.style.display="none";}}
function submitForm(){modal.style.display="none";}
function checkModals(modalNum){if(modalNum===1){modal.style.display="block";signForm.style.display="block";logForm.style.display="none";}else if(modalNum===2){modal.style.display="block";signForm.style.display="none";logForm.style.display="block";}}
function postClick(image,title,caption,user){pmodal.style.display="block";document.getElementById("puser").innerHTML=user;document.getElementById("pimg").src=image;document.getElementById("pimg").alt=title;document.getElementById("ptitle").innerHTML=title;document.getElementById("pcaption").innerHTML=caption;document.getElementById("puser").href='/user/'+user;}
var postButton=document.getElementById("new-post-button");var newPostModal=document.getElementById("new-post-modal");var newPostForm=document.getElementById("new-post");var imageSrc=document.getElementById("cp-image-src");var uploadedImage=document.getElementById("cp-image-uploaded");var followModal=document.getElementById("follow-modal");var followers=document.getElementById("followers");var following=document.getElementById("following");var followDiv=document.getElementById("following-div");var followerDiv=document.getElementById("followers-div");if(postButton){postButton.onclick=function(){if(newPostModal.style.display!="grid"){newPostModal.style.display="grid"}}}
newPostModal.onclick=function(event){if(event.target==newPostModal){newPostModal.style.display="none"}}
imageSrc.addEventListener("change",function(){const files=imageSrc.files
if(files.length==0){uploadedImage.src=""
uploadedImage.style.backgroundColor="black"}else{const file=files[0]
uploadedImage.style.backgroundImage=`url(${URL.createObjectURL(file)})`}})
document.getElementById("cp-return-url").value=window.location.href
followers.onclick=function(){followModal.style.display="block";followerDiv.style.display="block";followDiv.style.display="none";}
following.onclick=function(){followModal.style.display="block";followerDiv.style.display="none";followDiv.style.display="block";}
followModal.onclick=function(event){if(event.target==followModal){followModal.style.display="none";}}