import React from 'react'
import Container from 'react-bootstrap/Container'

export default function referalPage(props) {
    var referralLink = window.location.hostname + "/#/" + props.hashCode;
    var referralLinktext = referralLink.toString();
    var referralLinkEncoded = encodeURIComponent(referralLinktext);
    return(
        <div>
        <Container className="align-items-center d-flex" style={{height:'60vh'}}>
        <div className="referralLink">{referralLink}</div>
        <div>
        <h1>
     <Badge variant="secondary">{this.props.queueNo}</Badge>
  </h1>
        </div>
            <div className="shareCase">
                <a  href={"https://www.facebook.com/sharer/sharer.php?u=" + referralLinktext}>
                <i className="fa fa-facebook-square fa-2x" aria-hidden="true"></i></a>
                <a href={"https://twitter.com/home?status=" + referralLinkEncoded}>
                <i className="fa fa-twitter-square fa-2x" aria-hidden="true"></i></a>
                <a href={"https://www.linkedin.com/shareArticle?mini=true&url=" + referralLinkEncoded + "&title=&summary=&source="}>
                <i className="fa fa-linkedin-square fa-2x" aria-hidden="true"></i></a>
                <a href={"https://plus.google.com/share?url=" + referralLinktext}>
                <i className="fa fa-google-plus-square fa-2x" aria-hidden="true"></i></a>
            </div>

        </Container>
           
        </div>
    )
}