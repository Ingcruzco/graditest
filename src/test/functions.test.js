import { normalizeCurrency } from "../helpers/currency";

const testNormalizeCurrency=(amount,callback)=>{
    callback(normalizeCurrency(amount));
}

test('normalize currency', ()=>{
    testNormalizeCurrency(25841,(value)=>{
        expect(value).toBe('258.41')
    })
})



