import About from '@/components/home/About/About';
import Hero from '@/components/home/Hero/Hero';
import { Card, CardActions, CardContent, Typography } from '@mui/material';
import Button from '@mui/material/Button';

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[var(--font-geist-sans)]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start max-w-4xl">
        <Hero />
        <About />
        <div className="max-w-4xl flex gap-2">
          <Card title="" className="min-w-full">
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: 'text.secondary', fontSize: 14 }}
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be.nev.o.lent
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
          <Card title="Card 1" className="min-w-full">
            <CardContent>
              <Typography
                gutterBottom
                sx={{ color: 'text.secondary', fontSize: 14 }}
              >
                Word of the Day
              </Typography>
              <Typography variant="h5" component="div">
                be.nev.o.lent
              </Typography>
              <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>
                adjective
              </Typography>
              <Typography variant="body2">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </div>
      </main>
    </div>
  );
}
