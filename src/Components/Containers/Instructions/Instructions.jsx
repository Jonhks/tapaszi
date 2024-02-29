import React from "react";
import { Grid, Box } from "@mui/material";
import classes from "./Instructions.module.css";

const Instructions = () => {
  return (
    <Grid
      item
      xs={12}
    >
      <Grid
        container
        justifyContent={"center"}
        alignContent={"center"}
        spacing={2}
      >
        <Grid
          item
          xs={8}
        >
          <Box
            component="section"
            className={classes.boxInstructions}
          >
            <p className={classes.titleInstructions}>
              Welcome to the 20th running of the Portfolio Pool.
            </p>
            <Grid
              item
              xs={12}
              className={classes.subBoxInstructions}
            >
              <p>
                In this pool, you will select 8 teams from the 68 eligible to
                create a “portfolio” that will compete peer-to-peer where every
                win by teams in your portfolio earn points corresponding to the
                team’s seed and the round in which the win occurs.
              </p>
              <p className={classes.yellowSection}>
                Using the example of TeamX, an 8 seed, if TeamX wins their first
                round game, you earn 8 points. Should TeamX win their second
                round game, you receive an additional 16 points (8 points
                multiplied by 2nd round). Should Team 31 win the National
                Championship, you will earn a total of 168 points (8 + 16 + 24 +
                32 + 40 + 48).
              </p>
              <p>
                Similar to a portfolio manager, successful entries will best
                manage risk and reward, where less risky teams (1 and 2 seeds)
                have a greater chance of going further in the tournament, but
                also accrue points at a slower pace than that of riskier teams
                (seeds 12-16).
              </p>
              <p>
                The winner of the pool is the person that accumulates the most
                points throughout the tournament with his/her 8-team portfolio.
              </p>
              <p className={classes.graySection}>
                You can choose any 8 teams as part of your portfolio, regardless
                of region and who they play. As an example, you may be convinced
                that the winner of the 1st round game between Team 29 and Team
                33 is going to win it all, but you are uncertain which of these
                two teams will win. You can select BOTH teams as a part of your
                portfolio, which will guarantee one team earns points and stays
                alive for upcoming rounds, but the other team will lose and earn
                you 0 points.
              </p>
              <p>
                You may choose up to 8 different portfolios, with each portfolio
                costing $10 per entry.
              </p>
              <p className={classes.blueSection}>
                Scoring:
                <br />
                Play-in round win = 0.5 x seed <br />
                Round of 64 win = 1 x seed
                <br />
                Round of 32 win = 2 x seed
                <br />
                Round of 16 win = 3 x seed
                <br />
                Round of 8 win = 4 x seed
                <br />
                Semifinal win = 5 x seed
                <br />
                Championship round win = 6 x seed
              </p>
              <p>
                The first round will combine any points earned as part of the
                Play-in Game rounds and the Round of 64.
              </p>
              <p>
                *** If selecting a participant in a Play-In Game playing on
                Tuesday or Wednesday night ***
              </p>
              <p>
                You must submit these portfolios prior to Tuesday, March 19th at
                1p CST along with payment. Any winning Play-in Game participant
                will earn points equal to half of the seed. So, if you select
                Team 45 (an 11 seed), and Team 45 wins, you will earn 5.5
                points. Scoring in future rounds then remains the same (if Team
                45 beats Team 23 in round 1, they will earn 11 points). Play-in
                teams must be selected by the 1p CST deadline for Play-in Games.
                If submitting after the cut-off, this will automatically select
                the “Winner of” choice, and this will update as such through the
                tournament. You can also select the Play-in Game Winner option
                at the bottom of the drop-down as part of your portfolio.
              </p>
              <p className={classes.greenSection}>
                All portfolios MUST be received by 1am CST on Thursday, March
                20th. Once the portfolios have been submitted at that time, the
                picks of each portfolio will be revealed, and the Statistics
                Page will update.
              </p>
              <p>
                On the Home Page, I have provided my Venmo and PayPal accounts
                for payment. I must receive payment by the start of games on
                Thursday. On the Home Page, you will see a green checkmark
                (payment received) or red X (payment not received). I will try
                and update payment as soon as possible, understanding that I
                will have better ability to do so after standard working hours.
              </p>
              <p>
                Payouts will be dependent on the number of entries received. I
                do not take any commission from running this pool at this time.
              </p>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Instructions;
