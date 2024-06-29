import React from 'react';

function Test2(props) {
    // function add_chatinline(){
    //     var hccid=13207263;
    //     var nt=document.createElement("script");
    //     nt.async=true;
    //     nt.src="https://mylivechat.com/chatinline.aspx?hccid="+hccid;
    //     var ct=document.getElementsByTagName("script")[0];
    //     ct.parentNode.insertBefore(nt,ct);
    // }
    // add_chatinline();





    //     var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
    //     (function(){
    //     var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
    //     s1.async=true;
    //     s1.src='https://embed.tawk.to/665a5219981b6c5647770880/1hv8d1d86';
    //     s1.charset='UTF-8';
    //     s1.setAttribute('crossorigin','*');
    //     s0.parentNode.insertBefore(s1,s0);
    // })();



    function isValidWord(word) {
        // Check if the word contains at least 3 characters
        if (word.length < 3) return 0;

        // Regular expression to check for valid characters (digits and English letters)
        const validChars = /^[A-Za-z0-9]+$/;
        if (!validChars.test(word)) return 0;

        // Check for at least one vowel
        const vowels = /[AEIOUaeiou]/;
        if (!vowels.test(word)) return 0;

        // Check for at least one consonant
        const consonants = /[BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz]/;
        if (!consonants.test(word)) return 0;

        return 1;
    }

    console.log(isValidWord("234Adas"))


    return (
        <div>
            test 2
        </div>
    );
}

export default Test2;