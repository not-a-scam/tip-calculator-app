import React, {useState} from "react";
import Footer from "./Footer"
import Header from "./Header"
import Button from "./Button";
import CustomInput from "./CustomInput";
import TextInput from "./TextInput";
import dollar from "../images/icon-dollar.svg"
import person from "../images/icon-person.svg"
import ResultsCard from "./ResultsCard";

function App(){
    const [tipInputGrp, setTipInputGrp] = useState([
        {id:"5", classes:["btn", "tip-btn", "selected-tip-btn"], content:"5%"}, 
        {id:"10", classes:["btn", "tip-btn"], content:"10%"},
        {id:"15", classes:["btn", "tip-btn"], content:"15%"},
        {id:"25", classes:["btn", "tip-btn"], content:"25%"},
        {id:"50", classes:["btn", "tip-btn"], content:"50%"},
        {id:"custom", classes:["custom-input"], content:"Custom"}
    ]);

    const [tipValue, setTipValue] = useState("5");

    const [bill, setBill] = useState("");

    const [people, setPeople] = useState("");

    const [customTip, setCustomTip] = useState("");

    const [tipAmount, setTipAmount] = useState(0);

    const [totalAmount, setTotalAmount] = useState(0);

    function onClickTipInput(id, value){
        let btns = tipInputGrp.filter(item => {
            return item.id !== "custom"
        });
        if(id === "custom"){
            btns = btns.map(btn => ({
                ...btn, 
                classes:["btn", "tip-btn"]
            }))
        } else {
            btns = btns.map(btn => {
                if(btn.id === id){
                    return {
                        ...btn,
                        classes:["btn", "tip-btn", "selected-tip-btn"]
                    }
                } else {
                    return {
                        ...btn,
                        classes:["btn", "tip-btn"]
                    }
                }
            });
        }
        setTipInputGrp([...btns, {id:"custom", classes:["custom-input"], content:"Custom"}]);
        setTipValue(value);
        if(value && bill && people){
            const tip = ((parseInt(value)/100) * parseInt(bill)) / parseInt(people)
            setTipAmount(tip);
            setTotalAmount(tip + (bill/people));
        } else {
            setTipAmount(0);
            setTotalAmount(0);
        }
    }

    function onBillChange(value){
        if(tipValue && value && people){
            const tip = ((parseInt(tipValue)/100) * parseInt(value)) / parseInt(people);
            setTipAmount(tip);
            setTotalAmount(tip + (value/people))
        } else {
            setTipAmount(0);
            setTotalAmount(0);
        }
        setBill(value);
    }

    function onPeopleChange(value){
        if(tipValue && bill && value){
            const tip = ((parseInt(tipValue)/100) * parseInt(bill)) / parseInt(value);
            setTipAmount(tip);
            setTotalAmount(tip + (bill/value));
        } else {
            setTipAmount(0);
            setTotalAmount(0);
        }
        setPeople(value);
    }

    function onCustomTipChange(value){
        if(value && bill && people){
            const tip = ((parseInt(value)/100) * parseInt(bill)) / parseInt(people);
            setTipAmount(tip);
            setTotalAmount(tip + (bill/people));
        } else {
            setTipAmount(0);
            setTotalAmount(0);
        }
        setCustomTip(value);
        setTipValue(value);
    }

    function onReset(){
        window.location.reload();
    }

    return <div>
        <Header />
        <div className="container">
            <div className="app">
                <div className="row gx-5">
                    <div className="col-md-12 col-lg-6">
                        <div className="section">
                            <TextInput title="Bill" icon={dollar} isTop={true} onChange={onBillChange} value={bill}/>
                            <div className="row gy-2">
                            <div className="col-12">
                                <h2>Select Tip %</h2>
                            </div>
                            {tipInputGrp.map((input, index) => {
                                if(index < (tipInputGrp.length - 1)){
                                    return <div className="col-4">
                                        <Button key={input.id} id={input.id} onClick={onClickTipInput} classes={input.classes} content={input.content}/>
                                    </div>
                                } else {
                                    return (
                                        <div className="col-4">
                                            <CustomInput 
                                                key={input.id} 
                                                id={input.id} 
                                                onClick={onClickTipInput} 
                                                classes={input.classes} 
                                                content={input.content}
                                                onChange={onCustomTipChange}
                                                value={customTip}
                                            />
                                        </div>
                                    );
                                }

                            })}
                            </div>
                            <TextInput title="Number of People" icon={person} onChange={onPeopleChange} value={people}/>
                        </div>
                    </div>
                    <ResultsCard reset={onReset} tip={tipAmount} total={totalAmount}/>                          
                </div>
            </div>
        </div>
        <Footer />
    </div>
}

export default App;
