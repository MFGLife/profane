/**
The following pen is a comic page with the following features:

* Fully responsive. Switching to mobile sizes will stack the comic vertically
* Screen reader accessible with descriptive alt text of each panel
* CC Mode that will provide the reader with a large copy of the text they can read in a sans-serif font.


Update: I now have this working oon my website, along with the ability to adjust closesd caption settings!

Check it out at https://tavern-wenches.com/settings/#settings

**/

const ccBtn = document.querySelector('.comic_cc');
const comic = document.querySelector('.comic')

let ccBtnOn = false;

ccBtn.addEventListener("click", (event) => {
	ccBtnOn ? comic.classList.remove('cc') : comic.classList.add('cc');
	ccBtnOn = !ccBtnOn
})