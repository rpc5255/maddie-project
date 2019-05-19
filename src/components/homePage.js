import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import svgContact from "C:/Users/David Luong/hello-world/src/pics/baseline-contact_mail-24px.svg"
import svgPhone from "C:/Users/David Luong/hello-world/src/pics/baseline-contact_phone-24px.svg"
import svgLocation from "C:/Users/David Luong/hello-world/src/pics/baseline-location_on-24px.svg"
import picture from "C:/Users/David Luong/hello-world/src/pics/maddieSelfie.png"
import fbSVG from "C:/Users/David Luong/hello-world/src/pics/iconmonstr-facebook-6.svg"
import twitterSVG from "C:/Users/David Luong/hello-world/src/pics/iconmonstr-twitter-1.svg"
import linkedinSVG from "C:/Users/David Luong/hello-world/src/pics/iconmonstr-linkedin-3.svg"
import "C:/Users/David Luong/hello-world/src/style/homePageStyle.css"
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
  wrapper: {
    width: "50%",
    margin: "0 auto",
    position:'relative',
    top:'50px'
  },
  root: {
    flexGrow: 1,
  },
  wrapperPaper:{
    padding: theme.spacing.unit * 1,
    color: theme.palette.text.primary,
    rounded: "true",
  },
  paperRight: {
    float:'right',
    alignContent:'center',
    width:'50%',
    marginLeft:'30px',
    position:'relative',
    top:'50px',
    rounded: "true",
  },
  paperLeft: {
    padding: "30px",
    float:'left',
    width:'50px'
  }
})


class HomePage extends React.Component {
  render() {
    const { classes } = this.props;
    const imgStyle ={
      padding: "30px",
      position:'relative',
      left:'40px',
      // maxWidth: '100%',
      // width: '100%'
    }
    const socialMediaLogos={
      textAlign:'right',
      position:'relative',
      float:'right'

    }

    return (
      <div className={classes.wrapper}>
        <div className={classes.root}>
          <Grid container spacing={24}>
            <Grid item xs={12}>
              <Paper elevation={12} className={classes.wrapperPaper}>
                <img
                  src={picture}
                  style={imgStyle}
                  alt="madison elliott selfie"
                />
                <div className={classes.paperRight}>
                  <h1>Madison Elloitt</h1>
                  <h3>Anchor & Reporter</h3> <br />
                  <p>
                    <img src={svgLocation} /> &nbsp;Location:Buffalo, New
                    York
                  </p>
                  <p>
                    <img src={svgContact} />
                    &nbsp;Location:Buffalo, New York
                  </p>
                  <p>
                    {" "}
                    <img src={svgPhone} />
                    &nbsp;Location:Buffalo, New York
                  </p>
                </div>
                <div className={socialMediaLogos}>
                  <img src={fbSVG} />
                  <img src={twitterSVG} />
                  <img src={linkedinSVG} />
                </div>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
    )
}
}
export default withStyles(styles)(HomePage)