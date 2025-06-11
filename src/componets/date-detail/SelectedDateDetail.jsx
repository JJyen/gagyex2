import "./SelectedDateDetail.css";

export default function SelectedDateDetail() {
  return (
    <div className="date-detail-container">
      <header className="date-detail-header">
        <button>앞으로</button>
        <p>2025년 12월 22일</p>
        <button>뒤로</button>
      </header>
      <main className="amount-box">
        <article>
          <h4 className="badge fill-bg">지출</h4>
          <div className="expense-record">작성된 기록이 없어요</div>
        </article>
        <article>
          <h4 className="badge">수입</h4>
          <div className="income-record">작성된 기록이 없어요</div>
        </article>
      </main>
    </div>
  );
}
