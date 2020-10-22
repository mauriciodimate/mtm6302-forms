const forms = [
    `<form id='thank-you-form'>
    <p>who do you wish to thank?</p>
    <input type='text' name='recipient'>
    <button type 'submit'>send</button>
    </form>
    
    `
    ,
    `<form id='invitation'>
    <p>who do you wish to thank?</p>
    <input type='text' name='recipient'>
    <button type 'submit'>send</button>
    </form>
    `
]

function addForm(type){
    
    if(type === 'thankYou'){
    document.getElementById('form-container').innerHTML = forms[0]
} else if(type === 'invitation'){
    document.getElementById('form-container').innerHTML = forms[1]
}

}

document.getElementById('thankyou').addEventListener('click',
function () {
       addForm('thankYou')
})

document.getElementById('invitation').addEventListener(
'click', function (){
    addForm('invitation')
});