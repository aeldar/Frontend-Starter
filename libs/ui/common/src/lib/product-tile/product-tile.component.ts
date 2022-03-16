import { ChangeDetectionStrategy, Component, Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '@starter/model';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'starter-product-tile',
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductTileComponent {
  @Input() product: Product | null = null;
  @Input() isAdmin = false;
  @Input() isAuthenticated = false;

  constructor(private snackBar: MatSnackBar) {}

  onAddToCart() {
    this.notYetImplemented();
  }

  onEdit() {
    this.notYetImplemented();
  }

  private notYetImplemented() {
    console.log('TODO implement');
    this.snackBar.open('Sorry, not yet implemented', undefined, { duration: 2500 });
  }
}

@NgModule({
  imports: [CommonModule, MatCardModule, MatButtonModule, MatIconModule, MatTooltipModule],
  declarations: [ProductTileComponent],
  exports: [ProductTileComponent],
})
export class ProductTileComponentModule {}
