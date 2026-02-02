# SPS Cricket Club Management System
Cricket Club Management System - Spring Boot + React + MySQL (Group Project)

## Team Members
1. HMSW Senawirathna  — 28309 - Player Management
2. BMRK Karunathilake — 28906 - Team Management
3. RKAI C Gunaratna   — 28178 - Coach Management
4. PEH Rodrigo        — 29158 - Assignment Management
5. PRAD Pethiyagoda   — 29058 - Match Management
6. DCK Kuruwita       — 29194 - Performance Tracking
7. MTM Thilakarathna  — 28970 - Attendance Management
8. Am Sandun Prabath  — 28607 - Payment Management

## Setup Instructions

### Prerequisites
- Java 
- Node.js 
- MySQL 
- Maven 

### Backend Setup
```bash
cd backend
mvn clean install
mvn spring-boot:run
```

### Frontend Setup
```bash
cd frontend
npm install
npm start
```

### Database Setup
```sql
CREATE DATABASE sps_cricket_club;
USE sps_cricket_club;
source database/schema.sql;
```

## 🔗 Repository Link
https://github.com/dineshpethiyagoda1/sps-cricket-club

