var lengthONavbar= document.querySelectorAll(".c").length;
for(var i=0;i<lengthONavbar;i++)
{
    document.querySelectorAll(".c")[i].addEventListener("click",function(e)
    {
        var clickevent=e.target.innerHTML;
        switch(clickevent)
        {
            case "Home":
                e.preventDefault()
                document.querySelector(".homes").scrollIntoView(
                    {
                        behaviour:'smooth'
                    }
                )
                break;
            
            case "Contact":
                e.preventDefault()
                document.querySelector(".contacts").scrollIntoView(
                    {
                        behaviour:'smooth'
                    }
                )
                break;
            
            case "About":
            e.preventDefault()
                document.querySelector(".abouts").scrollIntoView(
                    {
                        behaviour:'smooth'
                    }
                )
                break;
            
            case "Skill":
                e.preventDefault()
                document.querySelector(".skills").scrollIntoView(
                    {
                        behaviour:'smooth'
                    }
                )
                break;
            
        }
    })
}


 
