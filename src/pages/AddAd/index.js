import React, { useState, useRef, useEffect } from 'react';
import {useHistory} from 'react-router-dom';
import MaskedInput from 'react-text-mask';
import createNumberMask from 'text-mask-addons/dist/createNumberMask';
import {PageArea} from './styled';

import useApi from '../../helpers/OlxAPI';

import {PageContainer, PageTitle, ErrorMessage } from '../../components/MainComponents';


const Page = () =>{

    const api = useApi();
    const fileField = useRef();
    const history = useHistory();

    const [categories,setCategories] = useState([]); //lista

    const [title, setTitle] = useState('');
    const [category,setCategory] = useState(''); //selecionada
    const [price, setPrice] = useState('');
    const [priceNegotiable, setPriceNegotiable] = useState(false);
    const [desc, setDesc] = useState('');


    const [disabled, setDesabled] = useState(false);
    const [ error, setError] = useState('');

    useEffect(()=>{
        const getCategories = async () =>{
            const cats = await api.getCategories();
            setCategories(cats);
        }
        getCategories();
    },[]);

    const handleSubmit = async(e) => {
        e.preventDefault();
        setDesabled(true);
        setError('');

        let errors = [];

        if(!title.trim()){
            errors.push('Sem titulo')
        }
        if(!category){
            errors.push("Sem categoria")
        }
        if(errors.length === 0) {

            const fDate = new FormData();
            fDate.append('title',title);
            fDate.append('price',price);
            fDate.append('priceneg',priceNegotiable);
            fDate.append('desc',desc);
            fDate.append('cat',category);

            if(fileField.current.files.length > 0){
                for(let i=0; i<fileField.current.files.length; i++){
                    fDate.append('img',fileField.current.files[i]);
                }

            }

            const json = await api.addAd(fDate);

            if(!json.error){
                history.push(`/ad/${json.id}`); //redirect sem atualizar page
                return;
            } else {
                setError(json.error);
            }


        } else {
            setError(errors.join("\n"));
        }

        setDesabled(false);
               
    }

    const priceMask = createNumberMask({
        prefix:'R$' ,
        includeThousandsSeparator:true,
        thousandsSeparatorSymbol:'.',
        allowDecimal:true,
        decimalSymbol:',',
    })

    return(
        <PageContainer>
            <PageTitle>Postar um anúncio</PageTitle>
            <PageArea>
                {error &&
                    <ErrorMessage>{error}</ErrorMessage>
                }

                <form onSubmit={handleSubmit}>
                    <label className="area">
                        <div className="area--title">Titulo</div>
                        <div className="area--input">
                            <input 
                                type="text" 
                                disabled={disabled}
                                value={title}
                                onChange={e=>setTitle(e.target.value)}
                                required
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Categoria</div>
                        <div className="area--input">
                           <select
                                disabled={disabled}
                                onChange={e=>setCategory(e.target.value)}
                                required={true}
                           >
                               <option></option>
                               {categories && categories.map(i=>
                                    <option key={i._id} value={i._id}>
                                        {i.name}
                                    </option>
                                )}
                           </select>
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço</div>
                        <div>
                            <MaskedInput
                                mask={priceMask}
                                placeholder="R$"
                                disabled={disabled || priceNegotiable}
                                value={price}
                                onChange={e=>setPrice(e.target.value)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Preço Negociável</div>
                        <div>
                            <input
                                type="checkbox"
                                disabled={disabled}
                                checked={priceNegotiable}
                                onChange={e=>setPriceNegotiable(!priceNegotiable)}
                            />
                        </div>
                    </label>
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <textarea
                                disabled={disabled}
                                value={desc}
                                onChange={e=>setDesc(e.target.value)}
                            >
                            </textarea>
                        </div>
                    </label>    
                    <label className="area">
                        <div className="area--title">Imagens</div>
                        <div>
                            <input
                                type="file"
                                disabled={disabled}
                                ref={fileField}
                                multiple
                            />
                        </div>
                    </label>
                                    
                    <label className="area">
                        <div className="area--title">Descrição</div>
                        <div className="area--input">
                            <button 
                                disabled={disabled}>
                                   Adicionar Anúncio
                            </button>
                        </div>
                    </label>
                </form>
            </PageArea>
        </PageContainer>
    );
}

export default Page;