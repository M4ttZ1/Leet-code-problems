type JSONValue = null | boolean | number | string | JSONValue[] | { [key: string]: JSONValue };
type Obj = Record<string, JSONValue> | Array<JSONValue>;

function compactObject(obj: Obj): Obj {
    if (Array.isArray(obj)) {
        return obj.reduce((acc: any[], curr: any) => {
            if (curr) {
                acc.push(compactObject(curr));
            }
            return acc;
        }, []);
    } else if (typeof obj === 'object' && obj !== null) {
        return Object.entries(obj).reduce((acc: {[key: string]: any}, [key, curr]: [string, any]) => {
            if (curr) {
                acc[key] = compactObject(curr);
            }
            return acc;
        }, {});
    } else {
        return obj;
    }
};