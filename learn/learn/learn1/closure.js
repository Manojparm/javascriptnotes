function outerFunc(){
    let outerValue="I am outer value";
    function innerFunc(){
        console.log(outerValue);
        function innerofInnerFunc(){
            console.log(outerFunc);
        }
        innerofInnerFunc();
    }
    innerFunc();
}
outerFunc();