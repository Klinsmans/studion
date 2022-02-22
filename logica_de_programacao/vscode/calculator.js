const compare = (x, y) => {
    let msg;

    if (x > y) {
        msg = `O número  ${x} é maior do que o número ${y}.`;
    } else if (x < y) {
        msg = `O número ${x} é menor do que o número ${y}.`;
    } else {
        msg = `Os dois números são iguais!`;
    }

    console.log(msg);
};

export default compare;