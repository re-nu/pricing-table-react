import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


export function Layout({ type, price, includes, excludes }) {
    const include=[...includes];
    const exclude=[...excludes]
  return (
    <div className='layout'>
        <Card>
        <CardContent>
      <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        {type}
      </Typography>
      <Typography variant="h5" component="div">
        {price}/month
      </Typography>
      <Typography  variant="body2" >
          <div className='include'>
            {include.map((i)=>("✔"+ i))}
          </div>
      </Typography>
      <Typography sx={{ mb: 1.5 ,display:"flex",flexDirection:"colunm"}} color="text.secondary" >
            {exclude.map((i)=>("❌"+ i))}
      </Typography>
    </CardContent>
    <CardActions>
      <Button sx={{justifycontent: "space-around"}} size="small" variant="contained">Button</Button>
    </CardActions>

        </Card>
         
    </div>
  );
}
