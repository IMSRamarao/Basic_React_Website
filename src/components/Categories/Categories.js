import React, { useContext } from 'react';
// import categoriesData from '../../Json/Categoreies.json';
import './Categories.css';
import { CategoryContext } from "../../context/CategoryProvider";
import withSearch from '../../HOC/withSearch';

const Categories = (props) => {
    const [categoryData, setCategoryData] = useContext(CategoryContext);

    const filteredCategory = categoryData.filter(m => m.name.toLowerCase()
        .includes(props.searchTerm.toLowerCase()));

    if (filteredCategory.length === 0) {
        throw new Error('Data not found')
    }
    return (
        <div className="App">
            {filteredCategory.length === 0 ? (
                <h3>No data found</h3>
            ) : (filteredCategory.map((cat, index) => (
                <div className='Category' key={index}>
                    <h2>{cat.name}</h2>
                    <h3>Address: {cat.address}</h3>
                    <h4>City: {cat.city}</h4>
                </div>
            )))}
        </div>
    );


}


export default withSearch(Categories);






// import React from "react";
// import { Link, Route, useParams, useRouteMatch } from "react-router-dom";

// const Item = () => {
//     const { name } = useParams();

//     return (
//         <div>
//             <h3>{name}</h3>
//         </div>
//     );
// }

// const Category = () => {
    // const { url, path } = useRouteMatch();

//     return (
//         <div>
//             <ul>
//                 <li>
//                     <Link to={`${url}/shoes`}>Shoes</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/boots`}>Boots</Link>
//                 </li>
//                 <li>
//                     <Link to={`${url}/footwear`}>Footwear</Link>
//                 </li>
//             </ul>
//             <Route path={`${path}/:name`}>
//                 <Item />
//             </Route>
//         </div>
//     );
// };

// export default Category;

