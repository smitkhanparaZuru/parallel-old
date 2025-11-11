import Modal from '../modal';

export default function ChangelogModalLayout({ children }) {
  return (
    <Modal>
      <div>
        <h1>Changelog Modal</h1>
      </div>
      {children}
    </Modal>
  );
}
