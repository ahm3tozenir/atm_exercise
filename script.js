let totalCash = 1000;
// let username = 'ahmet';
// let password = 'qwerty';

const user = {
    name:'ahmet', 
    pass:'qwerty'
}

let usernameInp = prompt('Kullanıcı adınızı girin');
let passwordInp = prompt('Şifrenizi girin');

if(user.name==usernameInp && user.pass==passwordInp){
    while(true){
        let panel = Number(prompt(
            `Yapmak istediğiniz işlemi seçiniz:\n
            1- Bakiye Sorgu\n
            2- Para Çekme\n
            3- Para Yatırma\n
            4- Çıkış`));
            if(panel == 1){
                alert(`${totalCash}$ paranız var`);
            }
            else if(panel == 2){
                let withdraw = Number(prompt('Çekmek istediğiniz tutarı girin'));
                if(withdraw<=totalCash){
                    alert(`Güncel bakiyeniz: ${totalCash=totalCash-withdraw}$`);
                }
                else if(totalCash-withdraw>-500){
                    alert(`${totalCash=totalCash-withdraw}$ borcunuz var`);
                }
                else{
                    alert('Daha fazla borca giremezsiniz');
                }
            }
            else if(panel == 3){
                let deposit = Number(prompt('Yatırmak istediğiniz tutarı girin'));
                alert(`Güncel bakiyeniz: ${totalCash=totalCash+deposit}$`);
            }
            else if(panel == 4){
                alert('Çıkış yaptınız');
                break;
            }
            else{
                alert('HATALI TUŞLAMA YAPTINIZ');
            }
    }
}
else if(usernameInp==user.name && user.pass!=passwordInp){
    alert('Şifreniz hatalı');
}
else if(usernameInp!=user.name && user.pass==passwordInp){
    alert('Kullanıcı adınız hatalı');
}
else{
    alert('tüm bilgiler hatalı');
}




