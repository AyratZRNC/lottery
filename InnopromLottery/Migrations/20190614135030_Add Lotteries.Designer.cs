﻿// <auto-generated />
using System;
using InnopromLottery.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace InnopromLottery.Migrations
{
    [DbContext(typeof(DataContext))]
    [Migration("20190614135030_Add Lotteries")]
    partial class AddLotteries
    {
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn)
                .HasAnnotation("ProductVersion", "2.2.4-servicing-10062")
                .HasAnnotation("Relational:MaxIdentifierLength", 63);

            modelBuilder.Entity("InnopromLottery.Models.Lottery", b =>
                {
                    b.Property<int>("LotteryId")
                        .ValueGeneratedOnAdd();

                    b.Property<DateTime>("DrawTime");

                    b.Property<int>("FirstPlacePrizeId");

                    b.Property<int>("SecondPlacePrizeId");

                    b.Property<int>("Status");

                    b.Property<int>("ThirdPlacePrizeId");

                    b.HasKey("LotteryId");

                    b.HasIndex("FirstPlacePrizeId");

                    b.HasIndex("SecondPlacePrizeId");

                    b.HasIndex("ThirdPlacePrizeId");

                    b.ToTable("Lotteries");
                });

            modelBuilder.Entity("InnopromLottery.Models.Prize", b =>
                {
                    b.Property<int>("PrizeId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Description")
                        .IsRequired();

                    b.Property<string>("Name")
                        .IsRequired();

                    b.HasKey("PrizeId");

                    b.ToTable("Prizes");
                });

            modelBuilder.Entity("InnopromLottery.Models.User", b =>
                {
                    b.Property<int>("UserId")
                        .ValueGeneratedOnAdd();

                    b.Property<string>("Comment");

                    b.Property<string>("CompanyName")
                        .IsRequired();

                    b.Property<string>("Email")
                        .IsRequired();

                    b.Property<string>("FullName")
                        .IsRequired();

                    b.Property<int?>("LotteryId");

                    b.Property<string>("PhoneNumber")
                        .IsRequired();

                    b.Property<int>("Status");

                    b.HasKey("UserId");

                    b.HasIndex("LotteryId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("InnopromLottery.Models.Lottery", b =>
                {
                    b.HasOne("InnopromLottery.Models.Prize", "FirstPlacePrize")
                        .WithMany()
                        .HasForeignKey("FirstPlacePrizeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("InnopromLottery.Models.Prize", "SecondPlacePrize")
                        .WithMany()
                        .HasForeignKey("SecondPlacePrizeId")
                        .OnDelete(DeleteBehavior.Cascade);

                    b.HasOne("InnopromLottery.Models.Prize", "ThirdPlacePrize")
                        .WithMany()
                        .HasForeignKey("ThirdPlacePrizeId")
                        .OnDelete(DeleteBehavior.Cascade);
                });

            modelBuilder.Entity("InnopromLottery.Models.User", b =>
                {
                    b.HasOne("InnopromLottery.Models.Lottery", "Lottery")
                        .WithMany()
                        .HasForeignKey("LotteryId");
                });
#pragma warning restore 612, 618
        }
    }
}