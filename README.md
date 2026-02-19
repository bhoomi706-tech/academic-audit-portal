# Academic Audit & Accreditation Data Portal

A comprehensive internal college portal for managing faculty data, academic records, research activities, and institutional contributions for NAAC/NBA accreditation processes.

## 📋 Project Overview

This portal enables:
- **Faculty**: Upload teaching records, research data, audit documents
- **Admin/IQAC Coordinator**: Verify documents, manage audit cycles, send notifications, generate reports

## 🚀 Features

### Faculty Module
- ✅ Profile Management
- ✅ Teaching Records (subjects, lesson plans, timetables)
- ✅ Research & FDP Tracking
- ✅ Audit Documents Upload
- ✅ Dashboard with progress tracking
- ✅ Notifications

### Admin/Operator Module
- ✅ Faculty Management
- ✅ Document Verification & Approval
- ✅ Audit Cycle Management
- ✅ Notification System
- ✅ Reports & Analytics
- ✅ Settings & Controls
- ✅ Audit Trail/Logs

## 📁 Project Structure

```
academic-audit-portal/
├── frontend/
│   ├── index.html
│   ├── css/
│   │   └── styles.css
│   ├── js/
│   │   └── app.js
│   ├── pages/
│   │   ├── faculty-dashboard.html
│   │   ├── faculty-profile.html
│   │   ├── faculty-teaching.html
│   │   ├── faculty-research.html
│   │   ├── faculty-audit.html
│   │   ├── admin-dashboard.html
│   │   ├── admin-faculty-management.html
│   │   ├── admin-document-verification.html
│   │   ├── admin-audit-management.html
│   │   ├── admin-reports.html
│   │   ├── admin-notifications.html
│   │   ├── admin-settings.html
│   │   └── admin-audit-trail.html
│   └── assets/
│       └── images/
├── backend/
│   ├── server.js
│   ├── config/
│   │   └── database.js
│   ├── routes/
│   │   ├── auth.js
│   │   ├── faculty.js
│   │   ├── admin.js
│   │   └── documents.js
│   ├── controllers/
│   │   ├── authController.js
│   │   ├── facultyController.js
│   │   ├── adminController.js
│   │   └── documentController.js
│   ├── models/
│   │   ├── User.js
│   │   ├── Faculty.js
│   │   ├── Document.js
│   │   └── Audit.js
│   └── middleware/
│       └── auth.js
├── database/
│   └── schema.sql
├── package.json
└── .gitignore
```

## 🛠 Tech Stack

- **Frontend**: HTML5, CSS3, JavaScript (Vanilla)
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT

## 📦 Installation & Setup

### Prerequisites
- Node.js (v14+)
- MySQL (v5.7+)
- Git

### Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/bhoomi706-tech/academic-audit-portal.git
   cd academic-audit-portal
   ```

2. **Install backend dependencies**:
   ```bash
   cd backend
   npm install
   ```

3. **Setup Database**:
   - Create a MySQL database: `academic_audit_db`
   - Import schema: `mysql -u root -p academic_audit_db < ../database/schema.sql`

4. **Configure environment** (backend/.env):
   ```
   DB_HOST=localhost
   DB_USER=root
   DB_PASSWORD=your_password
   DB_NAME=academic_audit_db
   JWT_SECRET=your_secret_key
   PORT=5000
   ```

5. **Start the backend server**:
   ```bash
   npm start
   ```

6. **Open frontend** (Open `frontend/index.html` in browser or serve with a local server)

## 📝 Default Login Credentials

### Faculty
- **Username**: faculty@college.com
- **Password**: faculty123

### Admin
- **Username**: admin@college.com
- **Password**: admin123

## 📊 Database Tables

- `users` - User authentication & roles
- `faculty` - Faculty profiles
- `teaching_records` - Teaching data
- `research_data` - Research & publications
- `audit_documents` - Document uploads
- `notifications` - Notification system
- `audit_logs` - Activity tracking

## 🔐 Security Features

- JWT-based authentication
- Role-based access control
- Password hashing
- Secure file uploads
- Audit trail logging

## 📞 Support

For issues or questions, please create an issue in the repository.

## 📄 License

This project is private and for college internal use only.