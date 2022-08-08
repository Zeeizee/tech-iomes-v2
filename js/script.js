const btnGetInTouch=document.querySelector('.btn-get')
const formcontainer=document.querySelector('.get-in-touch-cotact-form')
const btncancel=document.querySelector('.cancel')
const form=document.querySelector('form')
const txtusername=document.querySelector('.username')
const txtemail=document.querySelector('.useremail')
const txtmsg=document.querySelector('.usermsg')
const recaptcha=document.querySelector('.g-recaptcha')
const detailscheck=document.querySelector('#detailscheck')
const loader=document.querySelector('.loader')
detailscheck.addEventListener('change',()=>{
    console.log(detailscheck.checked)
})

btnGetInTouch.addEventListener('click',()=>{

    formcontainer.classList.remove('d-none')
    

})
var openGetInTouch=()=>{
    
    formcontainer.classList.remove('d-none')
    txtusername.focus();
                
}
btncancel.addEventListener('click', (e)=>{
    e.preventDefault()
    form.reset()
    grecaptcha.reset()
    formcontainer.classList.add('d-none')
   
})

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    
    if(txtusername.value.trim()===""){
        alert("Please Fill All GetInTouch Input Fields")
        return;
    }
    if(txtemail.value.trim()===""){
        alert("Please Fill All GetInTouch Input Fields")
        return;
    }
    if(!detailscheck.checked){
        alert("Please check this agrement policy ")
        return;
    }
    if(grecaptcha.getResponse().length===0){
        alert("Please Fill recaptcha to confirm you are not robot")
        return;
    }
   
    
    loader.classList.remove('d-none')
    sendMail();
      
   
})


// const  emailsend=()=>{
//     Email.send({
        
//         SecureToken : "69e174d2-2236-4e41-a2eb-1a9b63966628",
//         To : txtemail.value.trim(),
//         From : "info@tech-iomes.io",
//         Subject : "GET IN TOUCH (IOMES)",
//         Body : `Hello <b> ${txtusername.value.trim()}</b>: <br> Thank you for contacting us.<br>We have recieved your email.<br>We will reply you very soon.<br><br> <b>Best Regards:</b><br><span>IOMES Group</span>`
//     }).then(res=>{console.log("aaaa",res)}
    
//     ).catch(err=>{
//         console.log(err)
//     })
//     Email.send({
//         SecureToken : "69e174d2-2236-4e41-a2eb-1a9b63966628",
//         To : 'info@tech-iomes.io',
//         From : "info@tech-iomes.io",
//         Subject : `GET IN TOUCH (IOMES)`,
//         Body : `<b>${txtusername.value}</b> is trying to connect you through Get In Touch from this <b>Email: ${txtemail.value.trim()}</b> <br><br> ${txtmsg.value.trim()}  `
//     }).then(res=>{console.log("bbb",res)}
        
        
//     ).catch(err=>{
//         console.log(err)
//     })
// }
const sendMail=()=>{
    var tempParams={
        from_name:txtusername.value.trim(),
        from_email:txtemail.value.trim(),        
        message:txtmsg.value.trim()
        }
        emailjs.send('service_c9a1imi','template_6oryc6g',tempParams).then(res=>{        
            emailjs.send('service_c9a1imi','template_31g81l9',tempParams).then(resp=>{
                loader.classList.add('d-none')
                alert("Your message has been sent to IOMES Group. You will receive confirmation e-mail to your inbox. Stay in touch.")
                formcontainer.classList.add('d-none')
                grecaptcha.reset()
                form.reset();  
            })
        })
        .catch(err=>{
            console.log("Failed",err.message)
        })
}

          var lessevents=document.querySelector('.less')
          var moreevents=document.querySelector('.more')
          var btnLess=document.querySelector('.btnLess')
          var btnMore=document.querySelector('.btnMore')

          var showMore=(ele)=>{
            ele.classList.add('d-none')
            btnLess.classList.remove('d-none')
            lessevents.classList.add('d-none')
            moreevents.classList.remove('d-none');
            
            
          }
          var showLess=(ele)=>{
            ele.classList.add('d-none');
            btnMore.classList.remove('d-none');
            lessevents.classList.remove('d-none');
            moreevents.classList.add('d-none');

          }

     