import { useContext, useState } from 'react';
import { toast } from 'react-toastify';
import logoImg from '../../assets/images/logo.png';
import { AuthContext } from '../../contexts/Auth';
import { IoCalendarOutline, IoHeartOutline, IoMaleFemaleOutline, IoTransgenderOutline} from 'react-icons/io5';
import {v4 as uuidv4} from 'uuid';
import './characteristcsForm.css'

function CharacteristcsForm() {
    const {createCharacteristcs, createCharacteristcs2, createCharacteristcs3} = useContext(AuthContext);
    const Local = localStorage.getItem("foursome");
    const user = JSON.parse(Local)

    const [data,setData] = useState("");
    const [sex,setSex] = useState("");
    const [sign,setSign] = useState("");
    const [sexualOption,setSexualOption] = useState("");

    const [data2,setData2] = useState("");
    const [sex2,setSex2] = useState("");
    const [sign2,setSign2] = useState("");
    const [sexualOption2,setSexualOption2] = useState("");

    const [data3,setData3] = useState("");
    const [sex3,setSex3] = useState("");
    const [sign3,setSign3] = useState("");
    const [sexualOption3,setSexualOption3] = useState("");

    function handleCreateCharacteristcs(e){
        e.preventDefault()
        
        if(data !== "" && sex !== "" && sign !== "" && sexualOption !== "" && data2 !== "" && sex2 !== "" && sign2 !== "" && sexualOption2 !== "" && data3 !== "" && sex3 !== "" && sign3 !== "" && sexualOption3 !== "") {
            toast.info("Salvando Caracteristicas do trisal. Aguarde...");

            const id1 = uuidv4();
            const id2 = uuidv4();
            const id3 = uuidv4();
            createCharacteristcs3({
                idAccount: user.id,
                id3,
                data3,
                sex3,
                sign3,
                sexualOption3,
                id2,
                data2,
                sex2,
                sign2,
                sexualOption2,
                id1,
                data,
                sex,
                sign,
                sexualOption})
        } else if ( data !== "" && sex !== "" && sign !== "" && sexualOption !== "" && data2 !== "" && sex2 !== "" && sign2 !== "" && sexualOption2 !== "") {
            toast.info("Salvando Caracteristicas do casal. Aguarde...");
            const id1 = uuidv4();
            const id2 = uuidv4();
            createCharacteristcs2({
                idAccount: user.id,
                id2,
                data2,
                sex2,
                sign2,
                sexualOption2,
                id1,
                data,
                sex,
                sign,
                sexualOption,
            })

        } else if ( data !== "" && sex !== "" && sign !== "" && sexualOption !== "") {
            toast.info("Salvando Caracteristicas. Aguarde...");
            const id1 = uuidv4();
            createCharacteristcs({
                idAccount: user.id,
                id1,
                data,
                sex,
                sign,
                sexualOption})

        } else {
            toast.error("Data de nascimento, sexo, op????o sexual ou signo n??o est??o preenchidos!")
        }
    }

//-----------------------------------

    function handleSelectSex(e) {
        setSex(e.target.value)
    }
    
    
    function handleSelectSign(e) {
        setSign(e.target.value)
    }

    function handleSelectSexualOption(e) {
        setSexualOption(e.target.value)
    }

    function handleSelectSex2(e) {
        setSex2(e.target.value)
    }

    function handleSelectSign2(e) {
        setSign2(e.target.value)
    }

    function handleSelectSexualOption2(e) {
        setSexualOption2(e.target.value)
    }

    function handleSelectSex3(e) {
        setSex3(e.target.value)
    }


    function handleSelectSign3(e) {
        setSign3(e.target.value)
    }

    function handleSelectSexualOption3(e) {
        setSexualOption3(e.target.value)
    }



    return (
            <div className="content-Login">
                <div className="title">
                    <img src={logoImg} alt="" />
                    <h2>Caracteristicas</h2>
                    </div>
                        <form onSubmit={handleCreateCharacteristcs}>
                            <div className="data">
                            <br /><br />
                   {user.type === "Trisal" ?
                    <div className="data-form">   
                    <span>Membro casal 1</span><br />
                    <h5>Data de nascimento</h5>
                    <div className="date">
                    <p> <IoCalendarOutline /></p>
                    <input required type="date" placeholder="Data de Nascimenrto" value={data}  onChange={(e) => setData(e.target.value)}/>
                    </div>

                    <div className="date">
                    <p> <IoMaleFemaleOutline /></p>
                    <select className={sex === "" ? "" : "active"} required value={sex} onChange={handleSelectSex}>
                                <option value="">Sexo</option>
                                <option value="Homem">Homem </option>
                                <option value="Mulher">Mulher</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoTransgenderOutline /></p>
                            <select className={sexualOption === "" ? "" : "active"} required value={sexualOption} onChange={handleSelectSexualOption}>
                                <option value="">Op????o Sexual</option>
                                <option value="Hetero Sexual">Hetero Sexual </option>
                                <option value="Bissexual">Bissexual</option>
                                <option value="Bi Curioso">Bi Curioso</option>
                                <option value="Pansexual">Pansexual</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoHeartOutline /></p>
                            <select className={sign === "" ? "" : "active"} required value={sign} onChange={handleSelectSign}>
                                <option value="">Signo</option>
                                <option value="??ries">??ries </option>
                                <option value="Touro">Touro </option>
                                <option value="G??meos">G??meos</option>
                                <option value="C??ncer">C??ncer</option>
                                <option value="Le??o">Le??o</option>
                                <option value="Virgem">Virgem</option>
                                <option value="Libra">Libra</option>
                                <option value="Escorpi??o">Escorpi??o</option>
                                <option value="Sagit??rio">Sagit??rio</option>
                                <option value="Capric??rnio">Capric??rnio</option>
                                <option value="Aqu??rio">Aqu??rio</option>
                                <option value="Peixes">Peixes</option>
                            </select>
                            </div>
                    <br /><br />
                    <span>Membro casal 2</span><br />
                    <h5>Data de nascimento</h5>
                    <div className="date">
                    <p> <IoCalendarOutline /></p>
                    <input required type="date" placeholder="Data de Nascimenrto" value={data2}  onChange={(e) => setData2(e.target.value)}/>
                    </div>

                    <div className="date">
                    <p> <IoMaleFemaleOutline /></p>
                    <select className={sex2 === "" ? "" : "active"} required value={sex2} onChange={handleSelectSex2}>
                                <option value="">Sexo</option>
                                <option value="Homem">Homem </option>
                                <option value="Mulher">Mulher</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoTransgenderOutline /></p>
                            <select className={sexualOption2 === "" ? "" : "active"} required value={sexualOption2} onChange={handleSelectSexualOption2}>
                                <option value="">Op????o Sexual</option>
                                <option value="Hetero Sexual">Hetero Sexual </option>
                                <option value="Bissexual">Bissexual</option>
                                <option value="Bi Curioso">Bi Curioso</option>
                                <option value="Pansexual">Pansexual</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoHeartOutline /></p>
                            <select className={sign2 === "" ? "" : "active"} required value={sign2} onChange={handleSelectSign2}>
                                <option value="">Signo</option>
                                <option value="??ries">??ries </option>
                                <option value="Touro">Touro </option>
                                <option value="G??meos">G??meos</option>
                                <option value="C??ncer">C??ncer</option>
                                <option value="Le??o">Le??o</option>
                                <option value="Virgem">Virgem</option>
                                <option value="Libra">Libra</option>
                                <option value="Escorpi??o">Escorpi??o</option>
                                <option value="Sagit??rio">Sagit??rio</option>
                                <option value="Capric??rnio">Capric??rnio</option>
                                <option value="Aqu??rio">Aqu??rio</option>
                                <option value="Peixes">Peixes</option>
                            </select>
                            </div>

                            <br /><br />
                    <span>Membro casal 3</span><br />
                    <h5>Data de nascimento</h5>
                    <div className="date">
                    <p> <IoCalendarOutline /></p>
                    <input required type="date" placeholder="Data de Nascimenrto" value={data3}  onChange={(e) => setData3(e.target.value)}/>
                    </div>

                    <div className="date">
                    <p> <IoMaleFemaleOutline /></p>
                    <select className={sex3 === "" ? "" : "active"} required value={sex3} onChange={handleSelectSex3}>
                                <option value="">Sexo</option>
                                <option value="Homem">Homem </option>
                                <option value="Mulher">Mulher</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoTransgenderOutline /></p>
                            <select className={sexualOption3 === "" ? "" : "active"} required value={sexualOption3} onChange={handleSelectSexualOption3}>
                                <option value="">Op????o Sexual</option>
                                <option value="Hetero Sexual">Hetero Sexual </option>
                                <option value="Bissexual">Bissexual</option>
                                <option value="Bi Curioso">Bi Curioso</option>
                                <option value="Pansexual">Pansexual</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoHeartOutline /></p>
                            <select className={sign3 === "" ? "" : "active"} required value={sign3} onChange={handleSelectSign3}>
                                <option value="">Signo</option>
                                <option value="??ries">??ries </option>
                                <option value="Touro">Touro </option>
                                <option value="G??meos">G??meos</option>
                                <option value="C??ncer">C??ncer</option>
                                <option value="Le??o">Le??o</option>
                                <option value="Virgem">Virgem</option>
                                <option value="Libra">Libra</option>
                                <option value="Escorpi??o">Escorpi??o</option>
                                <option value="Sagit??rio">Sagit??rio</option>
                                <option value="Capric??rnio">Capric??rnio</option>
                                <option value="Aqu??rio">Aqu??rio</option>
                                <option value="Peixes">Peixes</option>
                            </select>
                            </div>
       </div>
             : user.type === "Casal"?
             <div className="data-form">
                  <span>Membro casal 1</span><br />
                  <h5>Data de nascimento</h5>
                  <div className="date">
                    <p> <IoCalendarOutline /></p>
                    <input required type="date" placeholder="Data de Nascimenrto" value={data}  onChange={(e) => setData(e.target.value)}/>
                    </div>

                    <div className="date">
                    <p> <IoMaleFemaleOutline /></p>
                    <select className={sex === "" ? "" : "active"} required value={sex} onChange={handleSelectSex}>
                                <option value="">Sexo</option>
                                <option value="Homem">Homem </option>
                                <option value="Mulher">Mulher</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoTransgenderOutline /></p>
                            <select className={sexualOption === "" ? "" : "active"} required value={sexualOption} onChange={handleSelectSexualOption}>
                                <option value="">Op????o Sexual</option>
                                <option value="Hetero Sexual">Hetero Sexual </option>
                                <option value="Bissexual">Bissexual</option>
                                <option value="Bi Curioso">Bi Curioso</option>
                                <option value="Pansexual">Pansexual</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoHeartOutline /></p>
                            <select className={sign === "" ? "" : "active"} required value={sign} onChange={handleSelectSign}>
                                <option value="">Signo</option>
                                <option value="??ries">??ries </option>
                                <option value="Touro">Touro </option>
                                <option value="G??meos">G??meos</option>
                                <option value="C??ncer">C??ncer</option>
                                <option value="Le??o">Le??o</option>
                                <option value="Virgem">Virgem</option>
                                <option value="Libra">Libra</option>
                                <option value="Escorpi??o">Escorpi??o</option>
                                <option value="Sagit??rio">Sagit??rio</option>
                                <option value="Capric??rnio">Capric??rnio</option>
                                <option value="Aqu??rio">Aqu??rio</option>
                                <option value="Peixes">Peixes</option>
                            </select>
                            </div>
                            
                            <br /><br />
                    <span>Membro casal 2</span><br />
                    <h5>Data de nascimento</h5>
                    <div className="date">
                    <p> <IoCalendarOutline /></p>
                    <input required type="date" placeholder="Data de Nascimenrto" value={data2}  onChange={(e) => setData2(e.target.value)}/>
                    </div>

                    <div className="date">
                    <p> <IoMaleFemaleOutline /></p>
                    <select className={sex2 === "" ? "" : "active"} required value={sex2} onChange={handleSelectSex2}>
                                <option value="">Sexo</option>
                                <option value="Homem">Homem </option>
                                <option value="Mulher">Mulher</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoTransgenderOutline /></p>
                            <select className={sexualOption2 === "" ? "" : "active"} required value={sexualOption2} onChange={handleSelectSexualOption2}>
                                <option value="">Op????o Sexual</option>
                                <option value="Hetero Sexual">Hetero Sexual </option>
                                <option value="Bissexual">Bissexual</option>
                                <option value="Bi Curioso">Bi Curioso</option>
                                <option value="Pansexual">Pansexual</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoHeartOutline /></p>
                            <select className={sign2 === "" ? "" : "active"} required value={sign2} onChange={handleSelectSign2}>
                                <option value="">Signo</option>
                                <option value="??ries">??ries </option>
                                <option value="Touro">Touro </option>
                                <option value="G??meos">G??meos</option>
                                <option value="C??ncer">C??ncer</option>
                                <option value="Le??o">Le??o</option>
                                <option value="Virgem">Virgem</option>
                                <option value="Libra">Libra</option>
                                <option value="Escorpi??o">Escorpi??o</option>
                                <option value="Sagit??rio">Sagit??rio</option>
                                <option value="Capric??rnio">Capric??rnio</option>
                                <option value="Aqu??rio">Aqu??rio</option>
                                <option value="Peixes">Peixes</option>
                            </select>
                            </div>

             </div>
             :
             <div className="data-form">
                     <h5>Data de nascimento</h5>
                     <div className="date">
                    <p> <IoCalendarOutline /></p>
                    <input required type="date" placeholder="Data de Nascimenrto" value={data}  onChange={(e) => setData(e.target.value)}/>
                    </div>

                    <div className="date">
                    <p> <IoMaleFemaleOutline /></p>
                    <select className={sex === "" ? "" : "active"} required value={sex} onChange={handleSelectSex}>
                                <option value="">Sexo</option>
                                <option value="Homem">Homem </option>
                                <option value="Mulher">Mulher</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoTransgenderOutline /></p>
                            <select className={sexualOption === "" ? "" : "active"} required value={sexualOption} onChange={handleSelectSexualOption}>
                                <option value="">Op????o Sexual</option>
                                <option value="Hetero Sexual">Hetero Sexual </option>
                                <option value="Bissexual">Bissexual</option>
                                <option value="Bi Curioso">Bi Curioso</option>
                                <option value="Pansexual">Pansexual</option>
                            </select>
                            </div>

                            <div className="date">
                    <p> <IoHeartOutline /></p>
                            <select className={sign === "" ? "" : "active"} required value={sign} onChange={handleSelectSign}>
                                <option value="">Signo</option>
                                <option value="??ries">??ries </option>
                                <option value="Touro">Touro </option>
                                <option value="G??meos">G??meos</option>
                                <option value="C??ncer">C??ncer</option>
                                <option value="Le??o">Le??o</option>
                                <option value="Virgem">Virgem</option>
                                <option value="Libra">Libra</option>
                                <option value="Escorpi??o">Escorpi??o</option>
                                <option value="Sagit??rio">Sagit??rio</option>
                                <option value="Capric??rnio">Capric??rnio</option>
                                <option value="Aqu??rio">Aqu??rio</option>
                                <option value="Peixes">Peixes</option>
                            </select>
                            </div>
             </div>
                }
                </div>
                <br />
                    <div className='confirmation'>
                       <br />
                       <br />
                        <button type='submit'>Salvar e avan??ar</button>
                        
                    </div>
                        </form>
            </div>
    )
}

export {CharacteristcsForm}