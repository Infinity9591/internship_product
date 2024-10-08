USE [business]
GO
ALTER TABLE [dbo].[user] DROP CONSTRAINT [FK__user__account_id__0095D40B]
GO
ALTER TABLE [dbo].[team] DROP CONSTRAINT [FK__team__department__09F455BC]
GO
ALTER TABLE [dbo].[relation_pos_per] DROP CONSTRAINT [FK__relation___posit__7BD11EEE]
GO
ALTER TABLE [dbo].[relation_pos_per] DROP CONSTRAINT [FK__relation___permi__7DB96760]
GO
ALTER TABLE [dbo].[detail_acc_job] DROP CONSTRAINT [FK__detail_ac__job_i__7FA1AFD2]
GO
ALTER TABLE [dbo].[detail_acc_job] DROP CONSTRAINT [FK__detail_ac__accou__7EAD8B99]
GO
ALTER TABLE [dbo].[account] DROP CONSTRAINT [FK__account__positio__7CC54327]
GO
ALTER TABLE [dbo].[account] DROP CONSTRAINT [FK__account__departm__7ADCFAB5]
GO
/****** Object:  Table [dbo].[user]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[user]') AND type in (N'U'))
DROP TABLE [dbo].[user]
GO
/****** Object:  Table [dbo].[team]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[team]') AND type in (N'U'))
DROP TABLE [dbo].[team]
GO
/****** Object:  Table [dbo].[relation_pos_per]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[relation_pos_per]') AND type in (N'U'))
DROP TABLE [dbo].[relation_pos_per]
GO
/****** Object:  Table [dbo].[position]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[position]') AND type in (N'U'))
DROP TABLE [dbo].[position]
GO
/****** Object:  Table [dbo].[permission]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[permission]') AND type in (N'U'))
DROP TABLE [dbo].[permission]
GO
/****** Object:  Table [dbo].[job]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[job]') AND type in (N'U'))
DROP TABLE [dbo].[job]
GO
/****** Object:  Table [dbo].[detail_acc_job]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[detail_acc_job]') AND type in (N'U'))
DROP TABLE [dbo].[detail_acc_job]
GO
/****** Object:  Table [dbo].[department]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[department]') AND type in (N'U'))
DROP TABLE [dbo].[department]
GO
/****** Object:  Table [dbo].[account]    Script Date: 8/12/2024 10:58:43 PM ******/
IF  EXISTS (SELECT * FROM sys.objects WHERE object_id = OBJECT_ID(N'[dbo].[account]') AND type in (N'U'))
DROP TABLE [dbo].[account]
GO
/****** Object:  Table [dbo].[account]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[account](
	[id] [int] NOT NULL,
	[username] [nvarchar](255) NOT NULL,
	[password_hash] [nvarchar](255) NOT NULL,
	[department_id] [int] NULL,
	[position_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[department]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[department](
	[id] [int] NOT NULL,
	[name] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[detail_acc_job]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[detail_acc_job](
	[id] [int] NOT NULL,
	[begin_time] [datetimeoffset](7) NOT NULL,
	[end_time] [datetimeoffset](7) NOT NULL,
	[process] [nvarchar](255) NOT NULL,
	[account_id] [int] NULL,
	[job_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[job]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[job](
	[id] [int] NOT NULL,
	[name] [nvarchar](255) NOT NULL,
	[description] [nvarchar](255) NOT NULL,
	[note] [nvarchar](max) NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[permission]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[permission](
	[id] [int] NOT NULL,
	[name] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[position]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[position](
	[id] [int] NOT NULL,
	[name] [nvarchar](255) NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[relation_pos_per]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[relation_pos_per](
	[id] [int] NOT NULL,
	[position_id] [int] NULL,
	[permission_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[team]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[team](
	[id] [int] NOT NULL,
	[name] [nvarchar](255) NOT NULL,
	[department_id] [int] NOT NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
/****** Object:  Table [dbo].[user]    Script Date: 8/12/2024 10:58:43 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[user](
	[id] [int] NOT NULL,
	[name] [nvarchar](255) NOT NULL,
	[birthday] [datetimeoffset](7) NOT NULL,
	[email] [nvarchar](255) NOT NULL,
	[phone_number] [nvarchar](11) NOT NULL,
	[address] [nvarchar](max) NOT NULL,
	[account_id] [int] NULL,
PRIMARY KEY CLUSTERED 
(
	[id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
INSERT [dbo].[account] ([id], [username], [password_hash], [department_id], [position_id]) VALUES (0, N'admin', N'quanly', 0, 0)
INSERT [dbo].[account] ([id], [username], [password_hash], [department_id], [position_id]) VALUES (1, N'truongbanit', N'truongbanit', 3, 1)
INSERT [dbo].[account] ([id], [username], [password_hash], [department_id], [position_id]) VALUES (2, N'nhanvienit', N'nhanvienit', 3, 2)
INSERT [dbo].[account] ([id], [username], [password_hash], [department_id], [position_id]) VALUES (3, N'ttsit', N'ttsit', 3, 3)
GO
INSERT [dbo].[department] ([id], [name]) VALUES (0, N'Ban Giám đốc')
INSERT [dbo].[department] ([id], [name]) VALUES (1, N'Ban Nhân sự')
INSERT [dbo].[department] ([id], [name]) VALUES (2, N'Ban Tài chính - Kế toán')
INSERT [dbo].[department] ([id], [name]) VALUES (3, N'Ban Công nghệ thông tin')
INSERT [dbo].[department] ([id], [name]) VALUES (4, N'Ban Chăm sóc khách hàng')
INSERT [dbo].[department] ([id], [name]) VALUES (5, N'amen')
GO
INSERT [dbo].[permission] ([id], [name]) VALUES (0, N'Phân quyền')
INSERT [dbo].[permission] ([id], [name]) VALUES (1, N'Quản lý tài khoản')
INSERT [dbo].[permission] ([id], [name]) VALUES (2, N'Quản lý phòng ban')
INSERT [dbo].[permission] ([id], [name]) VALUES (3, N'Quản lý chức vụ')
INSERT [dbo].[permission] ([id], [name]) VALUES (4, N'Quản lý công việc')
GO
INSERT [dbo].[position] ([id], [name]) VALUES (0, N'Giám đốc')
INSERT [dbo].[position] ([id], [name]) VALUES (1, N'Trưởng ban')
INSERT [dbo].[position] ([id], [name]) VALUES (2, N'Nhân viên')
INSERT [dbo].[position] ([id], [name]) VALUES (3, N'Thực tập sinh')
GO
INSERT [dbo].[relation_pos_per] ([id], [position_id], [permission_id]) VALUES (0, 0, 0)
GO
INSERT [dbo].[user] ([id], [name], [birthday], [email], [phone_number], [address], [account_id]) VALUES (0, N'nguyen van a', CAST(N'2024-12-02T15:03:46.1510000+00:00' AS DateTimeOffset), N'anv@gmail.com', N'0123456789', N'hai phong', 0)
INSERT [dbo].[user] ([id], [name], [birthday], [email], [phone_number], [address], [account_id]) VALUES (1, N'nguyen van b', CAST(N'2018-08-02T15:04:39.0200000+00:00' AS DateTimeOffset), N'bnv@gmail.com', N'0123456788', N'thai binh', 1)
INSERT [dbo].[user] ([id], [name], [birthday], [email], [phone_number], [address], [account_id]) VALUES (2, N'nguyen van c', CAST(N'2022-08-02T15:04:49.0040000+00:00' AS DateTimeOffset), N'cnv@gmail.com', N'0123456787', N'nam dinh', 2)
INSERT [dbo].[user] ([id], [name], [birthday], [email], [phone_number], [address], [account_id]) VALUES (3, N'nguyen van d', CAST(N'2020-07-02T15:05:13.9520000+00:00' AS DateTimeOffset), N'dnv@gmail.com', N'0123456786', N'quang ninh', 3)
GO
ALTER TABLE [dbo].[account]  WITH CHECK ADD FOREIGN KEY([department_id])
REFERENCES [dbo].[department] ([id])
GO
ALTER TABLE [dbo].[account]  WITH CHECK ADD FOREIGN KEY([position_id])
REFERENCES [dbo].[position] ([id])
GO
ALTER TABLE [dbo].[detail_acc_job]  WITH CHECK ADD FOREIGN KEY([account_id])
REFERENCES [dbo].[account] ([id])
GO
ALTER TABLE [dbo].[detail_acc_job]  WITH CHECK ADD FOREIGN KEY([job_id])
REFERENCES [dbo].[job] ([id])
GO
ALTER TABLE [dbo].[relation_pos_per]  WITH CHECK ADD FOREIGN KEY([permission_id])
REFERENCES [dbo].[permission] ([id])
GO
ALTER TABLE [dbo].[relation_pos_per]  WITH CHECK ADD FOREIGN KEY([position_id])
REFERENCES [dbo].[position] ([id])
GO
ALTER TABLE [dbo].[team]  WITH CHECK ADD FOREIGN KEY([department_id])
REFERENCES [dbo].[department] ([id])
GO
ALTER TABLE [dbo].[user]  WITH CHECK ADD FOREIGN KEY([account_id])
REFERENCES [dbo].[account] ([id])
GO
