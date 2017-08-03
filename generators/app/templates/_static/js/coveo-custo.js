document.addEventListener("DOMContentLoaded", function(event) { 
    var imgEl = document.createElement('img');
    imgEl.setAttribute('class', 'logo-image');
    imgEl.setAttribute('src', 'https://cdn.frontify.com/api/screen/thumbnail/r_j1Y47z-Wimcg4GBHddJtl_ZLocfbA6D5eN1Oyn0wzjjIPZgSzuiAokLIAsFGzjv_DNwDxfQYiEkkJ595hicw/400');
    imgEl.setAttribute('alt', 'coveo logo');
    
    var parentEl = document.getElementsByClassName('wy-side-nav-search')[0];
    parentEl.insertBefore(imgEl, parentEl.firstChild);
});