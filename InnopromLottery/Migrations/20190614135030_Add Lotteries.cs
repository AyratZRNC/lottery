using System;
using Microsoft.EntityFrameworkCore.Migrations;
using Npgsql.EntityFrameworkCore.PostgreSQL.Metadata;

namespace InnopromLottery.Migrations
{
    public partial class AddLotteries : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<int>(
                name: "LotteryId",
                table: "Users",
                nullable: true);

            migrationBuilder.CreateTable(
                name: "Lotteries",
                columns: table => new
                {
                    LotteryId = table.Column<int>(nullable: false)
                        .Annotation("Npgsql:ValueGenerationStrategy", NpgsqlValueGenerationStrategy.SerialColumn),
                    Status = table.Column<int>(nullable: false),
                    DrawTime = table.Column<DateTime>(nullable: false),
                    FirstPlacePrizeId = table.Column<int>(nullable: false),
                    SecondPlacePrizeId = table.Column<int>(nullable: false),
                    ThirdPlacePrizeId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Lotteries", x => x.LotteryId);
                    table.ForeignKey(
                        name: "FK_Lotteries_Prizes_FirstPlacePrizeId",
                        column: x => x.FirstPlacePrizeId,
                        principalTable: "Prizes",
                        principalColumn: "PrizeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Lotteries_Prizes_SecondPlacePrizeId",
                        column: x => x.SecondPlacePrizeId,
                        principalTable: "Prizes",
                        principalColumn: "PrizeId",
                        onDelete: ReferentialAction.Cascade);
                    table.ForeignKey(
                        name: "FK_Lotteries_Prizes_ThirdPlacePrizeId",
                        column: x => x.ThirdPlacePrizeId,
                        principalTable: "Prizes",
                        principalColumn: "PrizeId",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateIndex(
                name: "IX_Users_LotteryId",
                table: "Users",
                column: "LotteryId");

            migrationBuilder.CreateIndex(
                name: "IX_Lotteries_FirstPlacePrizeId",
                table: "Lotteries",
                column: "FirstPlacePrizeId");

            migrationBuilder.CreateIndex(
                name: "IX_Lotteries_SecondPlacePrizeId",
                table: "Lotteries",
                column: "SecondPlacePrizeId");

            migrationBuilder.CreateIndex(
                name: "IX_Lotteries_ThirdPlacePrizeId",
                table: "Lotteries",
                column: "ThirdPlacePrizeId");

            migrationBuilder.AddForeignKey(
                name: "FK_Users_Lotteries_LotteryId",
                table: "Users",
                column: "LotteryId",
                principalTable: "Lotteries",
                principalColumn: "LotteryId",
                onDelete: ReferentialAction.Restrict);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropForeignKey(
                name: "FK_Users_Lotteries_LotteryId",
                table: "Users");

            migrationBuilder.DropTable(
                name: "Lotteries");

            migrationBuilder.DropIndex(
                name: "IX_Users_LotteryId",
                table: "Users");

            migrationBuilder.DropColumn(
                name: "LotteryId",
                table: "Users");
        }
    }
}
