import logo from './logo.svg';
import './App.css';
import { Layout } from './Layout';

function App() {
  const offers=[
    {
      type:"Free",
      price:"$0",
      includes:["Single User","5GB Storage","Unlimited Public Projects","Community Access"],
      excludes:["Unlimited Private Projects","Dedicated Phone Support","Free Subdomain","Monthly Status Reports"]
    },

    {
      type:"Plus",
      price:"$9",
      includes:["5 User","50GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Free Subdomain"],
      excludes:["Monthly Status Reports"]
    },

    {
      type:"Plus",
      price:"$9",
      includes:["Unlimited User","150GB Storage","Unlimited Public Projects","Community Access","Unlimited Private Projects","Dedicated Phone Support","Unlimited Free Subdomain","Monthly Status Reports"],
      excludes:[]
    },

  ]
  return (
    <div className="App">
     {offers.map(({type,price,includes,excludes})=>(
       <Layout type={type} price={price} includes={includes} excludes={excludes}/>
     ))}
    </div>
  );
}

export default App;

