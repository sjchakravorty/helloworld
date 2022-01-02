window.onload = () => {
    console.log('Hello World... from JS')
    let h1 = document.getElementById('myId');
    console.log('h1 element is:')
    console.log(h1);
    console.log('setting bg color');
    h1.setAttribute('style', 'background-color:#eee');
    console.log('h1 element is:')
    console.log(h1);
    h1.style.color = 'red';
}