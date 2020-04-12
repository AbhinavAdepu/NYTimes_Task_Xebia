/**
 * @description DetailNews
 * @function DetailNews
 * @param {object} props - Any props value to this component
 * @returns {object} DetailNews
 * @author Abhinav Adepu
 */
import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { Slide } from "@material-ui/core";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const DetailNews = props => {
  const { itemDetail, openDetails, setOpenDetails, showBlock } = props;

  const handleClose = () => {
    setOpenDetails(false);
  };

  return (
    <div>
      <Dialog
        style={{ display: showBlock ? "block" : "none" }}
        fullWidth
        fullScreen
        open={openDetails}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle
          id="alert-dialog-title"
          style={{ background: "#47e4c2", color: "#fff" }}
        >
          {itemDetail !== null && itemDetail.title}
        </DialogTitle>
        <DialogContent dividers>
          <DialogContentText id="alert-dialog-description">
            {itemDetail !== null && itemDetail.abstract}
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>{` - ${itemDetail !== null && itemDetail.byline}`}</b>
          </DialogContentText>
          <DialogContentText id="alert-dialog-description">
            <b>{itemDetail !== null && itemDetail.published_date}</b>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary" autoFocus>
            close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
};
export default React.memo(DetailNews);
