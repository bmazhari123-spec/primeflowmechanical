HOW TO ADD PHOTOS TO THE GALLERY PAGE
======================================

The Gallery page (gallery.html) looks for image files in this folder
named exactly:

  photo1.jpg
  photo2.jpg
  photo3.jpg
  photo4.jpg
  photo5.jpg
  photo6.jpg
  photo7.jpg
  photo8.jpg
  photo9.jpg

To add your own photos:

1. Rename your photo files to match the names above (photo1.jpg,
   photo2.jpg, etc.) - use .jpg format.
2. Drop them into this folder (assets/gallery/).
3. From the PrimeFlow-Plumbing folder, run:
     git add -A
     git commit -m "Add gallery photos"
     git push
4. The live site rebuilds automatically within a minute or two.

Any slot without a matching photo is automatically hidden on the page,
so it's fine to only fill in a few to start. If you have more than 9
photos or want to send them to me to upload instead, just let me know.
