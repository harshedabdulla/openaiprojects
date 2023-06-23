/*const API_KEY = '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';
*/
async function fetchData(){
    const response = await fetch(`https://api.openai.com/v1/completions`,{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${API_KEY}`
        },
        body: JSON.stringify({
            prompt: 'Once upon a time',
            max_tokens: 5,
            model: "text-davinci-003",
        })
    })
    const data = await response.json();
    console.log(data); 

    
}

fetchData();