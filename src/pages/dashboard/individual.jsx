import React from 'react'
import Layout from '../../layout/main'
import { useParams } from 'react-router-dom';

function IndividualPaths() {
  const params = useParams();  
  const { subjectId: id } = params;

  return (
		<Layout>
			<div>
				<h1>Individual Paths</h1>
        <p>{id}</p>
			</div>
		</Layout>
	);
}

export default IndividualPaths