



// import React, { useState } from "react";
// import Layout from "./../../components/Layout/Layout";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import toast from "react-hot-toast";
// import "../../styles/AuthStyles.css";

// const Register = () => {
//   const [option, setVote] = useState("");
//   const navigate = useNavigate();

//   // form function
//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       // Check if the user has already voted
//       const hasVoted = await axios.get("/api/v1/auth/has-voted");
//       if (hasVoted.data.success) {
//         toast.error("You have already voted.");
//         return;
//       }

//       const res = await axios.post("/api/v1/auth/vote", {
//         option,
//       });

//       if (res && res.data.success) {
//         toast.success(res.data && res.data.message);
//         navigate("/");
//       } else {
//         toast.error(res.data.message);
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error("Something went wrong");
//     }
//   };

//   return (
//     <Layout title="Vote App">
//       <div className="form-container ">
//         <form onSubmit={handleSubmit}>
//           <h4 className="title">VOTE  HERE</h4>
//           <div className="mb-3">
//             <h6>Select your candidate</h6>
//             <label>
//               <p>
//                 <input
//                   type="radio"
//                   value="Candidate-1"
//                   id="can-1"
//                   checked={option === "Candidate-1"}
//                   onChange={() => setVote("Candidate-1")}
//                 />
//                 Candidate-1
//               </p>
//               <p>
//                 <input
//                   type="radio"
//                   id="can-2"
//                   value="Candidate-2"
//                   checked={option === "Candidate-2"}
//                   onChange={() => setVote("Candidate-2")}
//                 />
//                 Candidate-2
//               </p>
//               <p>
//                 <input
//                   type="radio"
//                   id="can-3"
//                   value="Candidate-3"
//                   checked={option === "Candidate-3"}
//                   onChange={() => setVote("Candidate-3")}
//                 />
//                 Candidate-3
//               </p>
//               <label>
//                 <input
//                   type="radio"
//                   id="can-4"
//                   value="Candidate-4"
//                   checked={option === "Candidate-4"}
//                   onChange={() => setVote("Candidate-4")}
//                 />
//                 Candidate-4
//               </label>
//             </label>
//           </div>
//           <button type="submit" className="btn btn-primary">
//             VOTE
//           </button>
//         </form>
//       </div>
//     </Layout>
//   );
// };

// export default Register;
////////////////////////////////////
///////////////////////////////////////
/////////////////////////////////////////////

import React, { useState } from "react";
import Layout from "./../../components/Layout/Layout";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import "../../styles/AuthStyles.css";

const Register = () => {
  const [option, setVote] = useState("");
  const navigate = useNavigate();

  // form function
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/v1/auth/vote", {
        option,
      });

      if (res && res.data.success) {
        toast.success(res.data.message);
        navigate("/register");
      } else {
        toast.error(res.data.message);
      }
    } catch (error) {
      console.log(error);
      toast.error("Something went wrong");
    }
  };

  return (
    <Layout title="Vote App">
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h4 className="title">VOTE HERE</h4>
          <div className="mb-3">
            <h6>Select your candidate</h6>
            <label>
              
              <p>
                <input
                  type="radio"
                  value="Candidate-1"
                  id="can-1"
                  checked={option === "Candidate-1"}
                  onChange={() => setVote("Candidate-1")}
                />
                Candidate-1
              </p>
              <p>
                <input
                  type="radio"
                  id="can-2"
                  value="Candidate-2"
                  checked={option === "Candidate-2"}
                  onChange={() => setVote("Candidate-2")}
                />
                Candidate-2
              </p>
              <p>
                <input
                  type="radio"
                  id="can-3"
                  value="Candidate-3"
                  checked={option === "Candidate-3"}
                  onChange={() => setVote("Candidate-3")}
                />
                Candidate-3
              </p>
              <label>
                <input
                  type="radio"
                  id="can-4"
                  value="Candidate-4"
                  checked={option === "Candidate-4"}
                  onChange={() => setVote("Candidate-4")}
                />
                Candidate-4
              </label>
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            VOTE
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Register;
