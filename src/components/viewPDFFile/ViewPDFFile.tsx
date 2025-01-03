import { useRef } from "react";

interface IProps {
  pdfURL: string;
  modalTitleText: string;
  openModalButtonText: string;
  id: string;
}

const ViewPDFFile = ({
  pdfURL,
  openModalButtonText,
  modalTitleText,
}: IProps) => {
  const triggerButtonRef = useRef<HTMLButtonElement>(null);

  const handleModalClose = () => {
    // Return focus to the trigger button when modal closes
    triggerButtonRef.current?.focus();
  };

  return (
    <div>
      {/* <!-- Button trigger modal --> */}
      <button
        ref={triggerButtonRef}
        type="button"
        className="btn btn-dark"
        data-bs-toggle="modal"
        data-bs-target="#viewPDF"
      >
        {openModalButtonText}
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade modal-xl"
        id="viewPDF"
        tabIndex={-1}
        aria-labelledby="viewPDFLabel"
        aria-hidden="true"
        onTransitionEnd={handleModalClose} // Handle close transition
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="viewPDFLabel">
                {modalTitleText}
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div className="modal-body">
              <iframe
                src={pdfURL}
                style={{ width: "100%", height: "500px", border: "none" }}
                title="PDF Viewer"
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewPDFFile;
