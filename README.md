# English learning website

This application is the final project for cs50's Web programming with Python and Javascript course

This is a website where students can obtain some information on English grammar, practise through games and consult material on pronunciation.  

## Distinctiveness and Complexity

I believe this site satisfies the distinctiveness because from other projects, it's a different type of site. (Not a Social Media, not a e-commerce site, not a mail-site and not a wiki-site). <br>
I believe this site is complex because there are three Javascript games that are coded by myself and because it's still a nice-looking site from a mobile view too.
<hr>
The website is divided in 7 parts:
  
 ## 1. Homepage
 
 A simple CSS page that displays a button where users can find all the grammar explanantions on this website
 
 ## 2. About me page
 
 A page where users can check who is managing the website and gain some basic information about Lara, the creator of the  website.
 Users can ask the teacher some questions using the form available in this page.
 
 ## 3. Explanation pages
 There is a dropdown menu that displays all the grammar explanation pages on the site.
 By choosing one of the elements in the dropdown menu, you will be redirected to its grammar explanation, written in markdown language
 
 ## 4. Games page
 There are 3 Javascript games:
    <li> Odd one out: User must find the odd element from a list _(In the case of mistakes, the correct answer is provided)_</li>
    <li> Word scramble: The output shows a jumbled word and the user must workout the correct spelling  _(In the case of mistakes, the correct answer is provided)_</li>
    <li> What are we talking about?: There is a list of words and users must find which topics they have in common _Example: (banana,apple,kiwi = Friut) (In the case of mistakes, the       correct answer is provided)_</li>
 
 ## 5. Pronunciation page:
 A page where users can find some downloadble material on how to improve their pronunciation skills
 
 ## 6. Useful materials page:
 A page where users can download materials other useful material regarding vocabulary and grammar.
 
 ## 7. Login/Logout page:
 Login and Logout page
 <hr>
 
 ## Login:
 If user is logged in, they can save  lessons in their personal profile
 
 ![Immagine 2021-09-06 123559](https://user-images.githubusercontent.com/82612765/132204459-db9e998d-0c94-4957-8273-7444e42d3896.jpg)
 
 and from their profile the can access directly the saved lesson page.

 ![Immagine 2021-09-06 123700](https://user-images.githubusercontent.com/82612765/132204598-b791449a-3da0-4ddd-a750-e891a296470d.jpg)

### Admin
If the user logged in is admin, they have a new menu page where they can create a new lesson in markdown language.
In their profile they can find all questions that have been sent to them with the possibility of deleting them.
  
  
![Immagine 2021-09-06 124037](https://user-images.githubusercontent.com/82612765/132205063-947a7789-d3d1-452b-82f4-953ddeaafa45.jpg)
![Immagine 2021-09-06 124135](https://user-images.githubusercontent.com/82612765/132205132-270a76d6-33f4-4a93-b980-198621c0f08d.jpg)
![Immagine 2021-09-06 124205](https://user-images.githubusercontent.com/82612765/132205187-f6c9186c-b6f0-4cc7-bdad-6b887ad7a542.jpg)


User Harry asking a question:
![Immagine 2021-09-06 124303](https://user-images.githubusercontent.com/82612765/132205330-9cd25a67-5014-49d2-91b8-51d1c78c79e9.jpg)

Admin looking at question:
![Immagine 2021-09-06 124357](https://user-images.githubusercontent.com/82612765/132205416-2e23a79f-244b-4ecc-9440-8757d5ee0291.jpg)


## Run the site

The folder with the site has already the initial migration so it **doesn't need** to _python manage.py makemigrations final_.
To run the project just go to the directory to the file and _python manage.py runserver_ the folder.

## Additional information

Superuserusername: admin <br>
Password: admin
