import Calendar from "@/componets/calendar/Calendar";
import SelectedDateDetail from "@/componets/date-detail/SelectedDateDetail";

export default function Home() {
  return (
    <div className="home-container">
      <div className="calendar-info">
        <Calendar />
        <div>
          <div className="home-login-box">
            <button>눌러서 로그인</button>
            <div className="gagye-login-img">
              <img src="/assets/gagye1.png" alt="gagye1" />
            </div>
          </div>
          <SelectedDateDetail />
        </div>
      </div>
    </div>
  );
}
