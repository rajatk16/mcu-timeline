import Header from '../components/header';
import React from 'react';
import customMaterialUI from '../shared/MUI/customMUI';
import {Card, CardHeader, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Link from 'next/link';
import 'isomorphic-fetch';


const Movie = ({title, details}) => 
  <div>
    <Header/>
    <Card>
      <CardHeader title={title} />
      <CardText>
        <div>
          {details}
        </div>
        <RaisedButton fullWidth={true}>
          <Link href='/' as='/marvel'>
            <a>
              Back
            </a>
          </Link>
        </RaisedButton>
      </CardText>
    </Card>
  </div>;

export default customMaterialUI(Movie);