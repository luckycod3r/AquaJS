function A_aqua_rand(min,max,...props){
    // props - исключения
    // те числа, которые невозможно получить в рандоме.
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
}