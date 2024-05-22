
"use client"
import React, { useState } from "react";

interface IData {
    id:number,
    question:string,
    answer:string
 }
const FAQ:IData[] = [
  {
    id: 0,
    question: "next sevdinmi?",
    answer: '"belede, qandigim qrafa yoxdur"',
  },
  {
    id: 1,
    question: "suallar vermezden evvel tapsiriqlari tehfil verdin mi?",
    answer: '"xeyir , amma ozumu agilli gostermek isteyirem"',
  },
  {
    id: 2,
    question:
      "lishni suallar az versen dersin rekordu 1 saatdan az olmasini derk eleyirsen mi?",
    answer: '"xeyir hec vaxt bu barede dushunmurdum"',
  },
  {
    id: 3,
    question:
      "olar mi sual vermezden qabag biraz dusunesen axi hec xenanin yeridir?",
    answer:
      '"men bele seyleri dusunmurem , ev tapsirigi hazir olmadigi ucun gic gic suallar verirem quya menim de nedense basim cixir"',
  },
];
const Accordion = () => {
    const [showHide,setshowHide] = useState<boolean | number>(false)
  return (
    <div className="container">
      <h2>FAQ</h2>
      {FAQ.map(({ id, question, answer }:IData,index:number) => (
        <div className="sualCavab" key ={id}onClick={() => {
            showHide === index ? setshowHide(false) : setshowHide(index)
        }}>
          <div className="sual">
            <span className="index">{index < 9 ? "0" + (index + 1) : index}</span>
            {question}</div>
          <div className={showHide === index ? "cavab" : "gizlet"}>{showHide === index ? answer : null}</div>
          <button>{showHide === index ? '-' : '+'}</button>
        </div>
      ))}
    </div>
  );
};

export default Accordion;
