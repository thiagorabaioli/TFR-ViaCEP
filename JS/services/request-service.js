import RequestException from "./exceptions/request-exception.js";

export async function getJson(url){

    try{
    const response = await fetch(url); //Resposta complexa que o Json não está disponível.
    const jsonBody = response.json(); //Retorna um promisse (Função assíncrona)
    return jsonBody;

    } catch(e){
          throw new RequestException("Erro ao realizar requisição");
    }
    

}
