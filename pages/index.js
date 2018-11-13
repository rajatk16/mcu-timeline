import Header from '../components/header';
import customMaterialUI from '../shared/MUI/customMUI';
import { Card, CardText} from 'material-ui/Card';
import RaisedButton from 'material-ui/RaisedButton';
import Movie from '../movie';
import Link from 'next/link';

const Index = () => {
  return (
    <div>
      <Header />
      {Movie.map(x =>
        <Card key={x.id}>
          <CardText>
            <Link href={`/movie?id=${x.id}`} as={`/marvel/${x.id}`} >
              <RaisedButton label={x.title} fullWidth={true} primary={true} />
            </Link>
          </CardText>
        </Card>
      )}
    </div>
  );
}
export default customMaterialUI(Index);
