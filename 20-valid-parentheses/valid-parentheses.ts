function isValid(s: string): boolean {
    let stack = [];

    for(let idx = 0; idx < s.length; idx++){
        if(stack.length && stack[stack.length - 1] == '(' && s[idx] == ')')
            stack.pop();
        else if(stack.length && stack[stack.length - 1] == '{' && s[idx] == '}')
            stack.pop();
        else if(stack.length && stack[stack.length - 1] == '[' && s[idx] == ']')
            stack.pop();
        else
            stack.push(s[idx]);
    }

    return stack.length === 0;
};