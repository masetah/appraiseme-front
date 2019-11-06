import React, {Component} from 'react';
import CanvasJSReact from '../canvasjs.react';

let CanvasJSChart = CanvasJSReact.CanvasJSChart;

class KPI extends Component {
  constructor(){
    super()
    this.state={
      appraisals:[],

      leadershipScores:[],
      leadershipAverage:0,

      peopleDevelopmentScores:[],
      peopleDevelopmentAverage:0,

      planningScores:[],
      planningAverage:0,


      communicationScores:[],
      communicationAverage:0,

      productivityScores:[],
      productivityAverage:0,

      knowledgeScores:[],
      knowledgeAverage:0,

      adaptabilityScores:[],
      adaptablityAverage:0,

      initiativeScores:[],
      inititativeAverage:0,

      judgementScores:[],
      judgementAverage:0,

      interpersonalRelationsScores:[],
      interpersonalRelationsAverage:0,
    }
  }
  
  componentDidMount=async()=>{
    await this.getAppraisals();

    this.getLeadershipScores();
    this.avgLeadershipScores(this.state.leadershipScores)

    this.getPeopleDevelopmentScores();
    this.avgPeopleDevelopmentScores(this.state.peopleDevelopmentScores)

    this.getPlanningScores();
    this.avgPlanningScores(this.state.planningScores)

    this.getCommunicationScores();
    this.avgCommunicationScores(this.state.communicationScores)

    this.getProductivityScores();
    this.avgProductivtyScores(this.state.productivityScores)

    this.getKnowledgeScores();
    this.avgKnowledgeScores(this.state.knowledgeScores)

    this.getAdaptabilityScores();
    this.avgAdaptabilityScores(this.state.adaptabilityScores)

    this.getInitiativeScores();
    this.avgInitiativeScores(this.state.initiativeScores)

    this.getJudgementScores();
    this.avgJudgementScores(this.state.judgementScores)

    this.getInterpersonalRelationsScores();
    this.avgInterpersonalRelationsScores(this.state.interpersonalRelationsScores)
  }
  getAppraisals = async () => {
    const appraisals =await fetch("https://apppraiseme-api.herokuapp.com/appraisals", {
      method: "GET"
  });
    const parsedResponse = await appraisals.json()
    this.setState({
        appraisals:parsedResponse.appraisals
    })
  }

  getLeadershipScores=()=>{
    let leadership_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        leadership_scores.push(this.state.appraisals[i].leadership_score)
      }
      this.setState({
        leadershipScores:leadership_scores
      })
  }
  avgLeadershipScores=(leadership_scores)=>{
    let leadership_scores_sum = leadership_scores.reduce((a,b)=>a+b,0)
    this.setState({
      leadershipAverage: leadership_scores_sum/leadership_scores.length
    })
  }
  getPeopleDevelopmentScores=()=>{
    let people_development_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        people_development_scores.push(this.state.appraisals[i].people_development_score)
      }
      this.setState({
        peopleDevelopmentScores:people_development_scores
      })
  }
  avgPeopleDevelopmentScores=(people_development_scores)=>{
    let people_development_scores_sum = people_development_scores.reduce((a,b)=>a+b,0)
    this.setState({
      peopleDevelopmentAverage: people_development_scores_sum/people_development_scores.length
    })
  }

  getPlanningScores=()=>{
    let planning_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        planning_scores.push(this.state.appraisals[i].planning_score)
      }
      this.setState({
        planningScores: planning_scores
      })
  }
  avgPlanningScores=(planning_scores)=>{
    let planning_scores_sum = planning_scores.reduce((a,b)=>a+b,0);
    this.setState({
      planningAverage: planning_scores_sum/planning_scores.length
    })
  }

  getCommunicationScores=()=>{
    let communication_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        communication_scores.push(this.state.appraisals[i].communication_score)
      }
      this.setState({
        communicationScores: communication_scores
      })
  }
  avgCommunicationScores=(communication_scores)=>{
    let communication_scores_sum = communication_scores.reduce((a,b)=>a+b,0);
    this.setState({
      communicationAverage: communication_scores_sum/communication_scores.length
    })
  }

  getProductivityScores=()=>{
    let productivity_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        productivity_scores.push(this.state.appraisals[i].productivity_score)
      }
      this.setState({
        productivityScores: productivity_scores
      })
  }
  avgProductivtyScores=(productivity_scores)=>{
    let productivity_scores_sum = productivity_scores.reduce((a,b)=>a+b,0);
    this.setState({
      productivityAverage: productivity_scores_sum/productivity_scores.length
    })
  }

  getKnowledgeScores=()=>{
    let knowledge_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        knowledge_scores.push(this.state.appraisals[i].knowledge_score)
      }
      this.setState({
        knowledgeScores: knowledge_scores
      })
  }
  avgKnowledgeScores=(knowledge_scores)=>{
    let knowledge_scores_sum = knowledge_scores.reduce((a,b)=>a+b,0);
    this.setState({
      knowledgeAverage: knowledge_scores_sum/knowledge_scores.length
    })
  }

  getAdaptabilityScores=()=>{
    let adaptability_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        adaptability_scores.push(this.state.appraisals[i].adaptability_score)
      }
      this.setState({
        adaptabilityScores: adaptability_scores
      })
  }
  avgAdaptabilityScores=(adaptability_scores)=>{
    let adaptability_scores_sum = adaptability_scores.reduce((a,b)=>a+b,0);
    this.setState({
      adaptabilityAverage: adaptability_scores_sum/adaptability_scores.length
    })
  }

  getInitiativeScores=()=>{
    let initiative_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        initiative_scores.push(this.state.appraisals[i].initiative_score)
      }
      this.setState({
        initiativeScores: initiative_scores
      })
  }
  avgInitiativeScores=(initiative_scores)=>{
    let initiative_scores_sum = initiative_scores.reduce((a,b)=>a+b,0);
    this.setState({
      initiativeAverage: initiative_scores_sum/initiative_scores.length
    })
  }

  getJudgementScores=()=>{
    let judgement_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        judgement_scores.push(this.state.appraisals[i].judgement_score)
      }
      this.setState({
        judgementScores: judgement_scores
      })
  }
  avgJudgementScores=(judgement_scores)=>{
    let judgement_scores_sum = judgement_scores.reduce((a,b)=>a+b,0);
    this.setState({
      judgementAverage: judgement_scores_sum/judgement_scores.length
    })
  }

  getInterpersonalRelationsScores=()=>{
    let interpersonal_relations_scores=[];
      for(let i=0; i<this.state.appraisals.length; i++){
        interpersonal_relations_scores.push(this.state.appraisals[i].interpersonal_relations_score)
      }
      console.log(interpersonal_relations_scores)
      this.setState({
        interpersonalRelationsScores: interpersonal_relations_scores
      })
  }
  avgInterpersonalRelationsScores=(interpersonal_relations_scores)=>{
    let interpersonal_relations_scores_sum = interpersonal_relations_scores.reduce((a,b)=>a+b,0);
    console.log(interpersonal_relations_scores_sum)
    this.setState({
      interpersonalRelationsAverage: interpersonal_relations_scores_sum/interpersonal_relations_scores.length
    })
  }

    render(){
      const options = {
        theme: "light2",
        title: {
          text: "Your Team's Appraisal Average KPI"
        },
        data: [{				
                  type: "column",
                  dataPoints: [
                      { label: "Leadership",  y: this.state.leadershipAverage  },
                      { label: "People Development", y: this.state.peopleDevelopmentAverage   },
                      { label: "Planning", y: this.state.planningAverage   },
                      { label: "Communication",  y: this.state.communicationAverage  },
                      { label: "Productivity",  y: this.state.productivityAverage  },
                      { label: "Knowledge",  y: this.state.knowledgeAverage  },
                      { label: "Adaptability",  y: this.state.adaptabilityAverage  },
                      { label: "Initiative",  y: this.state.initiativeAverage },
                      { label: "Judgement",  y: this.state.judgementAverage  },
                      { label: "Interpersonal Relations",  y: this.state.interpersonalRelationsAverage   }
                  ]
         }]
     }
        return (
            <div className="KPI-body">
            <CanvasJSChart options = {options}/>
            </div>
        );
      }
    }
    
    export default KPI;